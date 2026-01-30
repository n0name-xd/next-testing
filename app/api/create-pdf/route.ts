import { IQuiz, IResult, IUserData } from "@/shared/types";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import fs from "fs";
import path from "path";
import { removeDuplicates, splitStringBy67 } from "@/shared/hooks/helpers";

export const dynamic = "force-dynamic";

const getFontBase64 = () => {
  const fontPath = path.join(process.cwd(), "public/fonts/Roboto-Black.ttf");
  return fs.readFileSync(fontPath).toString("base64");
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const quiz: IQuiz = body.quiz;
    const commonUserData: IUserData = body.commonUserData;
    const result: IResult = body.result;

    const doc = new jsPDF();
    const fontBase64 = getFontBase64();

    doc.addFileToVFS("Roboto-Black.ttf", fontBase64);
    doc.addFont("Roboto-Black.ttf", "Roboto", "normal");
    doc.setFont("Roboto");

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

    if (surveyResults.length) {
      doc.addPage();

      const tableData = removeDuplicates(surveyResults)
        .map((e) => [e, ""])
        .filter((e) => !!e[0]);

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

    const calculateExtraDictionary = (): string[] => {
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
    };

    const extraDictionary = calculateExtraDictionary();

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

    const pdfArrayBuffer = doc.output("arraybuffer");

    const fileName = `${commonUserData.firstLetterName}${commonUserData.lastNumbersOfPhone}.pdf`;
    const filePath = path.join(process.cwd(), "storage", fileName);

    const storagePath = path.join(process.cwd(), "storage");
    if (!fs.existsSync(storagePath)) {
      fs.mkdirSync(storagePath, { recursive: true });
    }

    fs.writeFileSync(filePath, Buffer.from(pdfArrayBuffer));

    console.log(`PDF сохранен: ${filePath}`);

    return Response.json({ data: "" });
  } catch (error) {
    console.error("Create-pdf error:", error);
    throw new Error("Create-pdf error");
  }
}
