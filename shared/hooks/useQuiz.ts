import { useCallback, useMemo, useState } from "react";
import type { IQuiz, IResult, IUserData, IVariant } from "@/shared/types";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import { drawLongText } from "@/shared/hooks/helpers";

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
    isCompleteData: false,
    error: false,
  });

  const isLastStep = quiz.step >= quiz.questions?.length;

  const applyData = useCallback(() => {
    // if (value?.plusStep && ) {}

    if (value) {
      setResult({
        answers: [...result.answers, value],
        isShowResult: quiz.step === quiz.questions.length,
      });

      setQuiz((p) => ({ ...p, step: p.step + 1 + (value?.plusStep ?? 0) }));
      setValue(undefined);
    }
  }, [quiz.questions.length, quiz.step, result.answers, value]);

  const calculateExtraDictionary = useCallback((): string[][] => {
    const tableData: string[][] = [];

    quiz.extraDictionary?.forEach((e) => {
      let sum = 0;

      e.questions.variantsIds?.forEach((variantId) => {
        const resultValue = result.answers.find(
          (a) => a.variantId === variantId
        )?.value;

        if (resultValue) {
          sum += +resultValue;
        }
      });
      // console.log("e.questions.condition", e.questions.condition);
      //  console.log("value", value);
      //  Если женщина 3 => то алкета у мужика 4
      if (sum === e.questions.condition) {
        tableData.push([e.questions.result, e.questions.extraDescription]);
      }
    });

    return tableData;
  }, [quiz.extraDictionary, result.answers]);

  const createPdf = useCallback(() => {
    if (!isLastStep) return;

    // const extraDictionary = calculateExtraDictionary();

    // const table =
    //   result.answers
    //     ?.map((elem) => {
    //       const question = quiz.questions.find((e) =>
    //         e.variants.find((el) => el.variantId === elem.variantId)
    //       );

    //       const value = quiz.dictionary
    //         ?.find((d) => d?.questionId === question?.questionId)
    //         ?.variants?.find((v) => v?.variantId === elem?.variantId);

    //       if (value) {
    //         return [value?.result, value?.extraDescription];
    //       }
    //     })
    //     .filter((e) => !!e) ?? [];

    // const newTable = table.concat(extraDictionary);

    const pageWidth = 210;
    // const margin = 10;
    // const maxWidth = pageWidth - 2 * margin;

    doc.setFontSize(10);
    doc.text("Название теста:", pageWidth / 2, 10, { align: "center" });
    doc.setFontSize(16);
    doc.text(quiz.title, pageWidth / 2, 18, { align: "center" });

    doc.setFontSize(10);
    doc.text(`Фамилия: ${commonUserData.surname}`, 2, 28);
    doc.text(`Имя: ${commonUserData.name}`, 2, 33);
    doc.text(`Отчество: ${commonUserData.patronymic}`, 2, 38);
    doc.text(`Дата рождения: ${commonUserData.dateOfBirth}`, 2, 43);
    doc.text(
      `Пол: ${commonUserData.gender === "male" ? "мужской" : "женский"}`,
      2,
      48
    );

    const answersTable = result.answers.map((elem) => {
      const question = quiz.questions.find((e) =>
        e.variants.find((el) => el.variantId === elem.variantId)
      );

      return [
        question?.question,
        elem.inputType === "checkbox" ? elem.text : elem.value,
      ];
    });

    autoTable(doc, {
      startY: 53,
      tableWidth: pageWidth - 4,
      head: [["Вопрос", "Ответ"]],
      body: answersTable as [][],
      styles: {
        font: "Roboto",
        fontStyle: "normal",
      },
      margin: { left: 2 },
    });

    // const pageHeight = 297;

    // const startY = 20;
    // const maxHeight = pageHeight - startY - margin;

    // drawLongText(doc, text, {
    //   x: 2,
    //   y: startY,
    //   maxHeight: maxHeight,
    //   lineHeight: 5,
    //   fontSize: 12,
    //   align: "left",
    //   maxWidth: maxWidth,
    // });

    // doc.addPage();

    // autoTable(doc, {
    //   head: [["Предварительный результат", "Советы"]],
    //   body: newTable as [][],
    //   styles: {
    //     font: "Roboto",
    //     fontStyle: "normal",
    //   },
    // });

    doc.save("result.pdf");
  }, [
    calculateExtraDictionary,
    isLastStep,
    quiz.dictionary,
    quiz.questions,
    quiz.title,
    result.answers,
    commonUserData,
  ]);

  const applyUserData = useCallback(() => {
    if (
      commonUserData.dateOfBirth &&
      commonUserData.name &&
      commonUserData.patronymic &&
      commonUserData.surname &&
      commonUserData.gender
    ) {
      setCommonUserData((p) => ({ ...p, isCompleteData: true, error: false }));
    } else {
      setCommonUserData((p) => ({ ...p, error: true }));
    }
  }, [commonUserData]);

  return useMemo(
    () => ({
      commonUserData,
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
      commonUserData,
      result,
      value,
      quiz,
      setCommonUserData,
      applyUserData,
      applyData,
      createPdf,
      setValue,
    ]
  );
};
