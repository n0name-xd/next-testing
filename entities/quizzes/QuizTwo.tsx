"use client";

import { useQuiz } from "@/shared/hooks/useQuiz";
import type { IQuiz } from "@/shared/types";
import { Quiz } from "@/shared/ui/Quiz";

const QUIZ: IQuiz = {
  title: "Сложный тест",
  step: 1,
  questions: [
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется гипертоническая болезнь (повышенное артериальное давление)?",
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
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется ишемическая болезнь сердца (стенокардия)?",
      questionId: "3",
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
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется цереброваскулярное заболевание (заболевание сосудов головного мозга)?",
      questionId: "4",
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
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется хроническое заболевание бронхов или легких (хронический бронхит, эмфизема, бронхиальная астма)?",
      questionId: "5",
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
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется туберкулез (легких или иных локализаций)?",
      questionId: "6",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "11",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "12",
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется сахарный диабет или повышенный уровень сахара в крови?",
      questionId: "7",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "13",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "14",
          plusStep: 1,
        },
      ],
    },
    {
      question: "Принимаете ли Вы препараты для снижения уровня сахара?",
      questionId: "8",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "15",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "16",
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется заболевания желудка (гастрит, язвенная болезнь)?",
      questionId: "9",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "17",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "18",
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется хроническое заболевание почек?",
      questionId: "10",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "19",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "20",
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется ишемическая болезнь сердца (стенокардия)?",
      questionId: "3",
      variants: [
        {
          inputType: "text",
          text: "",
          value: "1",
          variantId: "5",
        },
      ],
    },
  ],
  dictionary: [
    {
      questionId: "1",
      variants: [
        {
          variantId: "1",
          result:
            "Вероятность гипертонической болезни (повышенное артериальное давление)",
          extraDescription:
            "• Вес (индекс массы тела), окружность талии, статус курения; артериальное давление, частота сердечных сокращений \n • Креатинин \n • Скорость клубочковой фильтрации \n • холестерин- липопротеины низкой плотности",
        },
      ],
    },
    {
      questionId: "2",
      variants: [
        {
          variantId: "3",
          result: "Принимает гипотензивные препараты",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "3",
      variants: [
        {
          variantId: "5",
          result: "Вероятность ишемической болезни сердца (стенокардии)",
          extraDescription:
            "• Вес (индекс массы тела), окружность талии, статус курения; артериальное давление, частота сердечных сокращений \n • Креатинин \n • Скорость клубочковой фильтрации \n • холестерин- липопротеины низкой плотности",
        },
      ],
    },
    {
      questionId: "4",
      variants: [
        {
          variantId: "7",
          result:
            "Вероятность цереброваскулярного заболевания (заболевания сосудов головного мозга)",
          extraDescription:
            "• Вес (индекс массы тела), окружность талии, статус курения; артериальное давление, частота сердечных сокращений \n • холестерин- липопротеины низкой плотности \n • УЗИ  сонных артерий; допплеровского исследования сонных артерий",
        },
      ],
    },
    {
      questionId: "5",
      variants: [
        {
          variantId: "9",
          result:
            "Вероятность хронического заболевания бронхов или легких (хронический бронхит, эмфизема, бронхиальная астма)",
          extraDescription:
            "• Cатурация кислорода в крови \n • Функция внешнего дыхания",
        },
      ],
    },
    {
      questionId: "6",
      variants: [
        {
          variantId: "11",
          result: "Вероятность туберкулеза (легких или других локализаций)",
          extraDescription: "• Рентген легких \n •Врач-фтизиатр",
        },
      ],
    },
    {
      questionId: "7",
      variants: [
        {
          variantId: "13",
          result: "Вероятность сахарного диабета",
          extraDescription:
            "• Вес ( ИМТ ), окружность талии, статус курения, АД \n • Глюкоза плазмы натощак \n • ХС-ЛПНП \n • Гликозилированный гемоглобин",
        },
      ],
    },
    {
      questionId: "8",
      variants: [
        {
          variantId: "15",
          result: "Принимает препараты для снижения уровня сахара",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "9",
      variants: [
        {
          variantId: "17",
          result: "Вероятность заболеваний желудка (гастрит, язвенная болезнь)",
          extraDescription: "• Эзофагогастродуоденоскопия (ЭГДС)",
        },
      ],
    },
    {
      questionId: "10",
      variants: [
        {
          variantId: "19",
          result: "Вероятность хронического заболевания почек",
          extraDescription:
            "• Эзофагогастродуоденоскопия (ЭГДС) \n • АД \n • ХС- ЛПНП \n • Скорость клубочковой фильтрации \n • Врача-нефролог",
        },
      ],
    },
  ],
};

export const QuizTwo = () => {
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
