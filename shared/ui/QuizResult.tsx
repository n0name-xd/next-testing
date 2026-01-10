import { ApplyButton } from "./ApplyButton";

interface IQuizResultProps {
  createPdf: () => void;
}

export const QuizResult: React.FC<IQuizResultProps> = ({ createPdf }) => {
  return (
    <div>
      <div className="mt-4 text-4xl font-semibold">Тест закончен</div>

      <ApplyButton apply={createPdf} text="Создать pdf" />
    </div>
  );
};
