"use client";

import { useQuiz } from "@/shared/hooks/useQuiz";
import type { IQuiz } from "@/shared/types";
import { Quiz } from "@/shared/ui/Quiz";

const QUIZ: IQuiz = {
  title: "Старше 65 лет",
  step: 1,
  questions: [
    {
      question: "Говорил ли Вам врач когда-либо, что у Вас имеется гипертоническая болезнь, повышенное артериальное давление (артериальная гипертония)?",
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
          plusStep: 1,
        },
      ],
    },
    {
      question: "Принимаете ли Вы препараты для снижения давления?",
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
    {
      question: "Говорил ли Вам врач когда-либо, что у Вас имеется сахарный диабет или повышенный уровень глюкозы (сахара) в крови?",
      questionId: "2",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "5",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "6",
          plusStep: 1,
        },
      ],
    },
    {
      question: "Принимаете ли Вы препараты для снижения уровня сахара? ",
      questionId: "2",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "7",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "8",
        },
      ],
    },
    {
      question: "Говорил ли Вам врач когда-либо, что у Вас имеется злокачественное новообразование? ",
      questionId: "2",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "9",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "10",
          plusStep: 1,
        },
      ],
    },
    {
      question: "Какое злокачественное новообразование?",
      questionId: "2",
      variants: [
        {
          inputType: "text",
          text: "",
          value: "1",
          variantId: "11",
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
        extraDescription: ["extraDescription !!!!"],
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
