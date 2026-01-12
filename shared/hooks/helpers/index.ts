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

export const splitStringBy67 = (str: string): string[] => {
  const result = [];
  for (let i = 0; i < str.length; i += 67) {
    result.push(str.slice(i, i + 67));
  }
  return result;
};

export const removeDuplicates = <T>(arr: Array<T>): Array<T> => {
  return [...new Set(arr)];
};
