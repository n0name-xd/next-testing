import { ApplyButton } from "@/shared/ui/ApplyButton";
import { Answers } from "@/shared/ui/Answers";
import { QuizResult } from "@/shared/ui/QuizResult";
import { Question } from "@/shared/ui/Question";
import type { IQuiz, IResult, IUserData, IVariant } from "@/shared/types";
import { UserData } from "./UserData";
import { Dispatch, SetStateAction } from "react";

interface IQuizProps {
  commonUserData: IUserData;
  isLoading: boolean;
  result: IResult;
  value: IVariant | undefined;
  quiz: IQuiz;
  setChecked: React.Dispatch<React.SetStateAction<IVariant | undefined>>;
  applyData: () => void;
  createPdf: () => void;
  applyUserData: () => void;
  setCommonUserData: Dispatch<SetStateAction<IUserData>>;
  successText: string;
}

export const Quiz: React.FC<IQuizProps> = ({
  commonUserData,
  isLoading,
  result,
  value,
  quiz,
  successText,
  setChecked,
  applyData,
  createPdf,
  applyUserData,
  setCommonUserData,
}) => {
  if (!commonUserData.isCompleteData) {
    return (
      <UserData
        commonUserData={commonUserData}
        applyUserData={applyUserData}
        setCommonUserData={setCommonUserData}
      />
    );
  }

  return (
    <div className="mt-6">
      <h1 className="text-3xl font-semibold">{quiz.title}</h1>
      {result.isShowResult ? (
        <QuizResult
          createPdf={createPdf}
          isLoading={isLoading}
          successText={successText}
        />
      ) : (
        <>
          <Question quiz={quiz} />
          <Answers
            variants={quiz.questions[quiz.step - 1]?.variants}
            value={value}
            setChecked={setChecked}
          />
          <ApplyButton
            apply={applyData}
            text="Принять"
            isLoading={isLoading}
            disabled={isLoading}
          />
        </>
      )}
    </div>
  );
};
