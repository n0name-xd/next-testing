import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const transporter = nodemailer.createTransport({
    // host: "smtp.yandex",
    // port: 465,
    // secure: true,
    host: "smtp.yandex.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"Петропко"',
    to: process.env.EMAIL_TO,
    subject: "Тестовое письмо",
    text: "Привет! Это простое текстовое письмо.",
    html: "Привет!Это HTML-письмо с форматированием.",
  };

  try {
    const info = await transporter.sendMail(mailOptions);

    console.log("Письмо отправлено:", info.messageId);
    return Response.json({ data: info, text: "Письмо отправлено" });
  } catch (error) {
    console.error("Ошибка отправки:", error);
    return Response.json({ data: error, text: "Ошибка отправки" });
  }
}
