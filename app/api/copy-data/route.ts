import { dbPath } from "@/shared/libs/bd";
import ExcelJS from "exceljs";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const auth = request.headers.get("auth");
    if (auth !== process.env.SECRET) {
      return new Response("Unauthorized", { status: 401 });
    }

    const db = await open({ filename: dbPath, driver: sqlite3.Database });
    // Добавили extraDictionary в SQL запрос
    const rows = await db.all(
      "SELECT id, created_at, userId, gender, test, answers, surveyResults, extraDictionary FROM userData",
    );
    await db.close();

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Ответы");

    const orderedDynamicColumns: string[] = [];

    const processedRows = rows.map((row) => {
      const flatRow: Record<string, unknown> = {
        id: row.id,
        created_at: row.created_at,
        userId: row.userId,
        gender: row.gender,
        test: row.test,
      };

      // 1. Обработка answers: [["Вопрос", "Ответ"]]
      if (row.answers) {
        try {
          const qaList = JSON.parse(row.answers);
          if (Array.isArray(qaList)) {
            qaList.forEach((pair) => {
              if (Array.isArray(pair) && pair.length === 2) {
                const [question, answer] = pair;
                const qKey = String(question).trim();
                flatRow[qKey] = answer;
                if (!orderedDynamicColumns.includes(qKey))
                  orderedDynamicColumns.push(qKey);
              }
            });
          }
        } catch (e) {
          /* ignore */
        }
      }

      // 2. Универсальная функция для полей-массивов (surveyResults и extraDictionary)
      const processArrayField = (fieldValue: string | null) => {
        if (!fieldValue) return;
        try {
          const list = JSON.parse(fieldValue);
          if (Array.isArray(list)) {
            list.forEach((item) => {
              const itemKey = String(item).trim();
              flatRow[itemKey] = "Да"; // Ставим "Да", если текст совпал
              if (!orderedDynamicColumns.includes(itemKey)) {
                orderedDynamicColumns.push(itemKey);
              }
            });
          }
        } catch (e) {
          /* ignore */
        }
      };

      processArrayField(row.surveyResults);
      processArrayField(row.extraDictionary);

      return flatRow;
    });

    // Формируем колонки
    const baseColumns = ["id", "created_at", "userId", "gender", "test"];
    const allColumns = [...baseColumns, ...orderedDynamicColumns];

    worksheet.columns = allColumns.map((col) => ({
      header: col,
      key: col,
      width: col.length < 15 ? 15 : 35,
    }));

    // Оформление
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
      type: "pattern",
      pattern: "solid",
      fgColor: { argb: "FFE0E0E0" },
    };

    worksheet.addRows(processedRows);

    const buffer = await workbook.xlsx.writeBuffer();

    return new Response(buffer, {
      headers: {
        "Content-Disposition": 'attachment; filename="database_export.xlsx"',
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      },
    });
  } catch (error) {
    console.error("Export error:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
