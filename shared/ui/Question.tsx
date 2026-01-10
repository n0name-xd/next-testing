import type { IQuiz } from "@/shared/types";

interface IQuestionProps {
  quiz: IQuiz;
}

export const Question: React.FC<IQuestionProps> = ({ quiz }) => {
  const currentQuestion = quiz.questions[quiz.step - 1];
  return (
    <>
      <div className="font-semibold mt-3"></div>
      <div className="font-semibold text-2xl mt-3">
        {currentQuestion?.img && (
          <img src={currentQuestion.img} className="w-[250px] h-[200px] mb-3" />
        )}
        <div className="flex gap-4 mt-3">
          <h2>Вопрос:</h2>{" "}
          <span className=" ">{currentQuestion?.question}</span>
        </div>
      </div>
    </>
  );
};
