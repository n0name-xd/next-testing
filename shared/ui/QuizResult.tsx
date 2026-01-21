import { ApplyButton } from "./ApplyButton";

interface IQuizResultProps {
  createPdf: () => void;
  isLoading: boolean;
  successText: string;
}

export const QuizResult: React.FC<IQuizResultProps> = ({
  isLoading,
  createPdf,
  successText,
}) => {
  return (
    <div>
      <div className="mt-4 text-4xl font-semibold">Тест завершен</div>

      <ApplyButton
        apply={createPdf}
        text="Создать pdf"
        isLoading={isLoading}
        disabled={isLoading || successText === "Письмо отправлено регистратору"}
      />
      <div>{successText}</div>
    </div>
  );
};
