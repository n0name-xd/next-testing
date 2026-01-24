import { useCallback, useMemo, useState, useTransition } from "react";
import type { IQuiz, IResult, IUserData, IVariant } from "@/shared/types";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import { splitStringBy67, removeDuplicates } from "@/shared/hooks/helpers";

const doc = new jsPDF();
doc?.addFont("/fonts/Roboto-Black.ttf", "Roboto", "normal");
doc.setFont("Roboto");

export const useQuiz = (QUIZ: IQuiz) => {
  const [value, setValue] = useState<IVariant | undefined>();
  const [quiz, setQuiz] = useState<IQuiz>(QUIZ);
  const [result, setResult] = useState<IResult>({
    isShowResult: false,
    answers: [],
  });
  const [commonUserData, setCommonUserData] = useState<IUserData>({
    firstLetterName: "",
    isCompleteData: false,
    error: false,
  });
  const [isPending, startTransition] = useTransition();
  const [successText, setSuccessText] = useState<string>("");
  const [isSHowTableResult, setIsSHowTableResult] = useState<boolean>(false);
  const [tableResult, setTableResult] = useState<(string | undefined)[]>([]);

  const isLastStep = quiz.step >= quiz.questions?.length;

  const applyData = useCallback(() => {
    if (value) {
      setResult({
        answers: [...result.answers, value],
        isShowResult: quiz.step === quiz.questions.length,
      });

      const isLastElem = quiz.step === quiz.questions.length - 1;
      const plusStep = isLastElem ? 0 : (value?.plusStep ?? 0);

      setQuiz((p) => ({ ...p, step: p.step + 1 + plusStep }));
      setValue(undefined);
    }
  }, [quiz.questions.length, quiz.step, result.answers, value]);

  const calculateExtraDictionary = useCallback((): string[] => {
    const tableData: string[] = [];

    quiz?.extraDictionary?.forEach((e) => {
      let sum = 0;

      e.questions.variantsIds?.forEach((variantId) => {
        const resultValue = result.answers.find(
          (a) => a.variantId === variantId,
        )?.value;

        if (resultValue) {
          sum += +resultValue;
        }
      });

      if (sum === e.questions.condition) {
        e.questions.extraDescription.forEach((el) => tableData.push(el));
      }
    });

    return tableData;
  }, [quiz.extraDictionary, result.answers]);

  const sendEmail = async (doc: jsPDF, surname: string) => {
    const pdfBase64 = doc.output("datauristring").split(",")[1];

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pdf: pdfBase64,
        fileName: "document.pdf",
        surname,
      }),
    });

    const data = await res.json();

    if (data.text === "Письмо отправлено") {
      setSuccessText("Письмо отправлено регистратору");
    } else {
      setSuccessText("Произошла ошибка, попробуйте через некоторое время");
    }
    console.log("data", data);
  };

  const setDataToBd = async (
    userData: IUserData,
    answers: (string | undefined)[][],
    surveyResults: (string | undefined)[],
    extraDictionary: string[],
    quiz: IQuiz,
  ) => {
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({
        userData,
        answers,
        surveyResults,
        extraDictionary,
        test: quiz.title,
      }),
    });

    const data = await res.json();
    console.log("data", data);
  };

  const createPdf = useCallback(async () => {
    if (!isLastStep) return;

    const extraDictionary = calculateExtraDictionary();
    const answersIds = result.answers.map((a) => a.variantId);

    quiz?.conditionsResult?.forEach((e) => {
      extraDictionary.push(e(answersIds, commonUserData));
    });

    const surveyResults =
      result.answers
        ?.map((elem) => {
          const question = quiz.questions.find((e) =>
            e.variants.find((el) => el.variantId === elem.variantId),
          );

          const value = quiz.dictionary
            ?.find((d) => d?.questionId === question?.questionId)
            ?.variants?.find((v) => v?.variantId === elem?.variantId);

          if (value) {
            return value?.result;
          }
        })
        .filter((e) => !!e) ?? [];

    quiz?.conditions?.forEach((q) => {
      surveyResults.push(q(answersIds, commonUserData));
    });

    const pageWidth = 210;

    doc.setFontSize(10);
    doc.text("Название теста:", pageWidth / 2, 10, { align: "center" });
    doc.setFontSize(16);

    let startY = 2;

    if (quiz.title.length > 67) {
      splitStringBy67(quiz.title).forEach((e) => {
        doc.text(e, pageWidth / 2, startY + 18, {
          align: "center",
        });
        startY += 6;
      });
    } else {
      doc.text(quiz.title, pageWidth / 2, startY + 18, { align: "center" });
    }

    doc.setFontSize(10);
    doc.text(
      `Идентификатор: ${commonUserData?.firstLetterName ?? ""}${commonUserData.lastNumbersOfPhone?.toString()}`,
      2,
      startY + 28,
    );

    doc.text(
      `Пол: ${commonUserData.gender === "male" ? "мужской" : "женский"}`,
      2,
      startY + 34,
    );

    const answersTable = result.answers.map((elem) => {
      const question = quiz.questions.find((e) =>
        e.variants.find((el) => el.variantId === elem.variantId),
      );

      return [
        question?.question,
        elem.inputType === "checkbox" ? elem.text : elem.value,
      ];
    });

    autoTable(doc, {
      startY: startY + 43,
      tableWidth: pageWidth - 4,
      head: [["Вопросы", "Ответы"]],
      body: answersTable as [][],
      styles: {
        font: "Roboto",
        fontStyle: "normal",
      },
      margin: { left: 2 },
    });

    if (surveyResults.length) {
      doc.addPage();

      const tableData = removeDuplicates(surveyResults)
        .map((e) => [e, ""])
        .filter((e) => !!e[0]);

      setTableResult(surveyResults)

      autoTable(doc, {
        startY: 2,
        tableWidth: pageWidth - 4,
        head: [["Результаты анкетирования", ""]],
        body: tableData as [][],
        styles: {
          font: "Roboto",
          fontStyle: "normal",
        },
        margin: { left: 2 },
      });
    }

    if (extraDictionary.length) {
      doc.addPage();
      const tableData = removeDuplicates(extraDictionary).map((e) => [e, ""]);
      autoTable(doc, {
        startY: 2,
        tableWidth: pageWidth - 4,
        head: [["Дополнительный перечень обследования", ""]],
        body: tableData as [][],
        styles: {
          font: "Roboto",
          fontStyle: "normal",
        },
        margin: { left: 2 },
      });
    }

    startTransition(async () => {
      doc.save("result.pdf");

      await sendEmail(
        doc,
        `${commonUserData?.firstLetterName}${commonUserData.lastNumbersOfPhone}`
      );
      setIsSHowTableResult(true);
      await setDataToBd(
        commonUserData,
        answersTable,
        surveyResults,
        extraDictionary,
        quiz,
      );
    });
  }, [
    commonUserData,
    isLastStep,
    result.answers,
    quiz,
    calculateExtraDictionary,
  ]);

  const applyUserData = useCallback(() => {
    if (
      commonUserData.firstLetterName &&
      commonUserData.lastNumbersOfPhone &&
      commonUserData.lastNumbersOfPhone.length === 4 &&
      commonUserData.gender
    ) {
      setCommonUserData((p) => ({ ...p, isCompleteData: true, error: false }));
    } else {
      setCommonUserData((p) => ({ ...p, error: true }));
    }
  }, [commonUserData]);

  return useMemo(
    () => ({
      isSHowTableResult,
      commonUserData,
      tableResult,
      successText,
      isLoading: isPending,
      result,
      value,
      quiz,
      setCommonUserData,
      applyUserData,
      applyData,
      createPdf,
      setValue,
    }),
    [
      isSHowTableResult,
      commonUserData,
      tableResult,
      successText,
      isPending,
      result,
      value,
      quiz,
      setCommonUserData,
      applyUserData,
      applyData,
      createPdf,
      setValue,
    ],
  );
};
