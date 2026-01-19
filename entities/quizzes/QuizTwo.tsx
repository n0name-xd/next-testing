"use client";

import { useQuiz } from "@/shared/hooks/useQuiz";
import type { IQuiz } from "@/shared/types";
import { Quiz } from "@/shared/ui/Quiz";

const QUIZ: IQuiz = {
  title: "111",
  step: 1,
  questions: [
    {
      question: "ВОпрос1?",
      questionId: "1",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "1",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "2",
        },
      ],
    },
    {
      question: "ВОпрос2?",
      questionId: "2",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "3",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "3",
        },
      ],
    },
  ],
  extraDictionary: [],
  conditions: [
    () => {
      return "12";
    },
    () => {
      return "opa";
    },
  ],
  dictionary: [],
};

export const QuizTwo = () => {
  const {
    quiz,
    result,
    value,
    commonUserData,
    isLoading,
    successText,
    applyUserData,
    setCommonUserData,
    setValue,
    applyData,
    createPdf,
  } = useQuiz(QUIZ);

  return (
    <Quiz
      createPdf={createPdf}
      setChecked={setValue}
      applyData={applyData}
      commonUserData={commonUserData}
      applyUserData={applyUserData}
      setCommonUserData={setCommonUserData}
      value={value}
      result={result}
      quiz={quiz}
      successText={successText}
      isLoading={isLoading}
    />
  );
};
