"use client";

import { useQuiz } from "@/shared/hooks/useQuiz";
import type { IQuiz } from "@/shared/types";
import { Quiz } from "@/shared/ui/Quiz";

const QUIZ: IQuiz = {
  title: "Test",
  step: 1,
  questions: [
    {
      question: "Как часто Вы употребляете алкогольные напитки?",
      questionId: "38",
      variants: [
        {
          inputType: "checkbox",
          text: "Никогда",
          value: "0",
          variantId: "73",
        },
        {
          inputType: "checkbox",
          text: "Раз в месяц и реже",
          value: "1",
          variantId: "74",
        },
        {
          inputType: "checkbox",
          text: "2−4 раза в месяц",
          value: "2",
          variantId: "75",
        },
        {
          inputType: "checkbox",
          text: "2−3 раза в неделю",
          value: "3",
          variantId: "76",
        },
        {
          inputType: "checkbox",
          text: "4 раза и больше в неделю",
          value: "4",
          variantId: "77",
        },
      ],
    },
    {
      question:
        "Какое количество алкогольных напитков (порций) Вы выпиваете обычно за один раз? 1 порция равна 12 мл чистого этанола ИЛИ 30 мл крепкого алкоголя (водки), ИЛИ 100 мл сухого вина, ИЛИ 300 мл пива",
      questionId: "39",
      variants: [
        {
          inputType: "checkbox",
          text: "1−2 порции ",
          value: "0",
          variantId: "78",
        },
        {
          inputType: "checkbox",
          text: "3−4 порции",
          value: "1",
          variantId: "79",
        },
        {
          inputType: "checkbox",
          text: "5−6 порций",
          value: "2",
          variantId: "80",
        },
        {
          inputType: "checkbox",
          text: "7−9 порций",
          value: "3",
          variantId: "81",
        },
        {
          inputType: "checkbox",
          text: "10 порций и больше",
          value: "4",
          variantId: "82",
        },
      ],
    },
    {
      question:
        "Как часто Вы употребляете за один раз 6 или более порций? 6 порций равны ИЛИ 180 мл крепкого алкоголя (водки), ИЛИ 600 мл сухого вина, ИЛИ 1,8 л пива",
      questionId: "40",
      variants: [
        {
          inputType: "checkbox",
          text: "Никогда",
          value: "0",
          variantId: "83",
        },
        {
          inputType: "checkbox",
          text: "Раз в месяц и реже",
          value: "1",
          variantId: "84",
        },
        {
          inputType: "checkbox",
          text: "2−4 раза в месяц",
          value: "2",
          variantId: "85",
        },
        {
          inputType: "checkbox",
          text: "2−3 раза в неделю",
          value: "3",
          variantId: "86",
        },
        {
          inputType: "checkbox",
          text: "4 раза и больше в неделю",
          value: "4",
          variantId: "87",
        },
      ],
    },
  ],
  extraDictionary: [
    {
      questions: {
        variantsIds: [
          "73",
          "74",
          "75",
          "76",
          "77",
          "78",
          "79",
          "80",
          "81",
          "82",
          "83",
          "84",
          "85",
          "86",
          "87",
          "2",
        ],
        condition: 4,
        result: "риск пагубного потребления алкоголя",
        extraDescription: ["• Консультация врача-нарколога"],
      },
    },
  ],
  dictionary: [
    {
      questionId: "38",
      variants: [
        {
          variantId: "73",
          result: "",
          extraDescription: "extraDescription 1",
        },
        {
          variantId: "74",
          result: "",
          extraDescription: "• Консультация врача-нарколога",
        },
        {
          variantId: "75",
          result: "",
          extraDescription: "• Консультация врача-нарколога",
        },
        {
          variantId: "76",
          result: "",
          extraDescription: "• Консультация врача-нарколога",
        },
        {
          variantId: "77",
          result: "",
          extraDescription: "• Консультация врача-нарколога",
        },
      ],
    },
  ],
  conditions: [
    (arr, userData) => {
      const points = new Map();
      const questions = ["38", "39", "40"];

      QUIZ.questions.forEach((q) => {
        if (questions.includes(q.questionId)) {
          q.variants.forEach((v) => {
            points.set(v.variantId, v.value);
          });
        }
      });

      let sum = 0;

      Array.from(points)?.forEach((e) => {
        if (arr.includes(e[0])) {
          sum += +e[1];
        }
      });

      if (
        (userData?.gender === "female" && sum >= 3) ||
        (userData?.gender === "male" && sum >= 4)
      ) {
        return "Пагубное влияние алкоголя";
      }

      return "";
    },
  ],
};

export const QuizFour = () => {
  const {
    quiz,
    result,
    value,
    commonUserData,
    applyUserData,
    setCommonUserData,
    setValue,
    applyData,
    createPdf,
  } = useQuiz(QUIZ);

  return (
    <Quiz
      setChecked={setValue}
      createPdf={createPdf}
      applyData={applyData}
      applyUserData={applyUserData}
      setCommonUserData={setCommonUserData}
      commonUserData={commonUserData}
      result={result}
      value={value}
      quiz={quiz}
    />
  );
};
