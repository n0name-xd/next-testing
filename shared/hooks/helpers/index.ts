import { jsPDF } from "jspdf";

interface IJsPDFOptions {
  x: number;
  y: number;
  maxHeight: number;
  lineHeight: number;
  fontSize: number;
  align: "left" | "center" | "right" | "justify";
  maxWidth: number;
}

export function drawLongText(doc: jsPDF, text: string, options: IJsPDFOptions) {
  const { x, y, maxHeight, lineHeight, fontSize, align } = options;

  doc.setFontSize(fontSize);
  const lines = doc.splitTextToSize(text, options.maxWidth);

  let currentY = y;

  for (const line of lines) {
    if (currentY + lineHeight > y + maxHeight) {
      doc.addPage();
      currentY = y;
    }

    doc.text(line, x, currentY, { align });
    currentY += lineHeight;
  }
}
