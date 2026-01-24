import db from "@/shared/libs/bd";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userData, answers, surveyResults, extraDictionary, test } = body;

    const stmt = db.prepare(`
        INSERT INTO userData (userId, gender, answers, surveyResults, extraDictionary, test)
        VALUES (?, ?, ?, ?, ?, ?)
    `);

    const info = stmt.run(
      `${userData.firstLetterName}${userData.lastNumbersOfPhone}`,
      userData.gender,
      JSON.stringify(answers ?? {}),
      JSON.stringify(surveyResults ?? {}),
      JSON.stringify(extraDictionary ?? {}),
      test,
    );

    return Response.json({ text: info });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    return Response.json({ data: error, text: "2" });
  }
}
