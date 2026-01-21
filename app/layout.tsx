import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/shared/ui/Header";

export const metadata: Metadata = {
  title: `ГБУЗ "Городищенская ЦРБ"`,
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={` antialiased`}>
        <Header />
        <main className="wrapper">{children}</main>
      </body>
    </html>
  );
}
