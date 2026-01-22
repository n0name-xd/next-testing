import db from "@/shared/libs/bd";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userData, answers, surveyResults, extraDictionary, test } = body;

    const stmt = db.prepare(`
        INSERT INTO userData (surname, name, patronymic, gender, dateOfBirth, answers, surveyResults, extraDictionary, test)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    const info = stmt.run(
      userData.surname,
      userData.name,
      userData.patronymic,
      userData.gender,
      userData.dateOfBirth,
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
