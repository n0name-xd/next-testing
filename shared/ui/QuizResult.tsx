import { ApplyButton } from "./ApplyButton";
import { ResultTable } from "./ResultTable";

interface IQuizResultProps {
  createPdf: () => void;
  isLoading: boolean;
  successText: string;
  isSHowTableResult: boolean;
  tableResult: (string | undefined)[];
}

export const QuizResult: React.FC<IQuizResultProps> = ({
  isLoading,
  createPdf,
  successText,
  isSHowTableResult,
  tableResult,
}) => {
  if (isSHowTableResult) {
    return <ResultTable tableResult={tableResult} />;
  }
  return (
    <div>
      <div className="mt-4 text-4xl font-semibold">Тест завершен</div>

      <ApplyButton
        apply={createPdf}
        text="Отправить результаты"
        isLoading={isLoading}
        disabled={isLoading || successText === "Письмо отправлено регистратору"}
      />
      <div>{successText}</div>
    </div>
  );
};
