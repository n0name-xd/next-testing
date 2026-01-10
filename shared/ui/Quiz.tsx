import { ApplyButton } from "@/shared/ui/ApplyButton";
import { Answers } from "@/shared/ui/Answers";
import { QuizResult } from "@/shared/ui/QuizResult";
import { Question } from "@/shared/ui/Question";
import type { IQuiz, IResult, IVariant } from "@/shared/types";

interface IQuizProps {
  quiz: IQuiz;
  result: IResult;
  value: IVariant | undefined;
  setChecked: React.Dispatch<React.SetStateAction<IVariant | undefined>>;
  applyData: () => void;
  createPdf: () => void;
}

export const Quiz: React.FC<IQuizProps> = ({
  quiz,
  result,
  value,
  setChecked,
  applyData,
  createPdf,
}) => {
  return (
    <div className="mt-6">
      <h1 className="text-3xl font-semibold">{quiz.title}</h1>
      {result.isShowResult ? (
        <QuizResult createPdf={createPdf} />
      ) : (
        <>
          <Question quiz={quiz} />
          <Answers
            variants={quiz.questions[quiz.step - 1]?.variants}
            value={value}
            setChecked={setChecked}
          />
          <ApplyButton apply={applyData} text="Принять" />
        </>
      )}
    </div>
  );
};
