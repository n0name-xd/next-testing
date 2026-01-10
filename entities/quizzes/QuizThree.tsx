"use client";

import { useQuiz } from "@/shared/hooks/useQuiz";
import type { IQuiz } from "@/shared/types";
import { Quiz } from "@/shared/ui/Quiz";

const QUIZ: IQuiz = {
  title: "Test",
  step: 1,
  questions: [
    {
      question: "Вопрос 1",
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
      question: "Вопрос 2",
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
          variantId: "4",
        },
      ],
    },
  ],
  extraDictionary: [
    {
      questions: {
        variantsIds: ["1", "3"],
        condition: 2,
        result: "result !!!!",
        extraDescription: "extraDescription !!!!",
      },
    },
  ],
  dictionary: [
    {
      questionId: "1",
      variants: [
        {
          variantId: "1",
          result: "Результат 1",
          extraDescription: "extraDescription 1",
        },
      ],
    },
  ],
};

export const QuizThree = () => {
  const {
    quiz,
    result,
    value,
    commonUserData,
    setValue,
    applyData,
    createPdf,
    applyUserData,
    setCommonUserData,
  } = useQuiz(QUIZ);

  return (
    <Quiz
      createPdf={createPdf}
      setChecked={setValue}
      applyData={applyData}
      applyUserData={applyUserData}
      setCommonUserData={setCommonUserData}
      commonUserData={commonUserData}
      value={value}
      result={result}
      quiz={quiz}
    />
  );
};
