import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    const { pdf, fileName } = await request.json();

    if (!pdf) {
      return Response.json({ text: "Файл не получен" }, { status: 400 });
    }

    const mailOptions = {
      from: `"Городищенская ЦРБ" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: "Диспансеризация граждан",
      text: "Опросный лист с результатами тестирования.",
      html: "Опросный лист.",
      attachments: [
        {
          filename: fileName || "document.pdf",
          content: pdf,
          encoding: "base64",
        },
      ],
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Письмо отправлено:", info.messageId);
    return Response.json({ data: info, text: "Письмо отправлено" });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    return Response.json({ data: error, text: "Ошибка отправки" });
  }
}
