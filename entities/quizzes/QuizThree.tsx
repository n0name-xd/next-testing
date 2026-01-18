"use client";

import { useQuiz } from "@/shared/hooks/useQuiz";
import type { IQuiz } from "@/shared/types";
import { Quiz } from "@/shared/ui/Quiz";

const QUIZ: IQuiz = {
  title: "Старше 65 лет",
  step: 1,
  questions: [
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется гипертоническая болезнь, повышенное артериальное давление (артериальная гипертония)?",
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
        "Говорил ли Вам врач когда-либо, что у Вас имеется сахарный диабет или повышенный уровень глюкозы (сахара) в крови?",
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
          plusStep: 1,
        },
      ],
    },
    {
      question: "Принимаете ли Вы препараты для снижения уровня сахара?",
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
        "Говорил ли Вам врач когда-либо, что у Вас имеется злокачественное новообразование? ",
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
          plusStep: 1,
        },
      ],
    },
    {
      question: "Какое злокачественное новообразование?",
      questionId: "6",
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
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется повышенный уровень холестерина? ",
      questionId: "7",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "12",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "13",
          plusStep: 1,
        },
      ],
    },
    {
      question: "Принимаете ли Вы препараты для снижения уровня холестерина?",
      questionId: "8",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "14",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "15",
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется перенесенный инфаркт миокарда? ",
      questionId: "9",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "16",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "17",
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется перенесенный инсульт?",
      questionId: "10",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "18",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "19",
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется хронический бронхит или бронхиальная астма?",
      questionId: "11",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "20",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "21",
        },
      ],
    },
    {
      question:
        "Возникает ли у Вас, когда поднимаетесь по лестнице, идете в гору или спешите, или при выходе из теплого помещения на холодный воздух, боль или ощущение давления, жжения, тяжести или явного дискомфорта за грудиной и (или) в левой половине грудной клетки, и (или) в левом плече, и (или) в левой руке?",
      questionId: "12",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "22",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "23",
          plusStep: 1,
        },
      ],
    },
    {
      question:
        "Указанные боли/ощущения/дискомфорт исчезают в течение не более чем 20 мин. после прекращения ходьбы/адаптации к холоду/в тепле/в покое и (или) они исчезают через 1−5 мин. после приема нитроглицерина?",
      questionId: "13",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "24",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "25",
        },
      ],
    },
    {
      question:
        "Возникала ли у Вас резкая слабость в одной руке и/или ноге так, что Вы не могли взять или удержать предмет, встать со стула, пройтись по комнате? ",
      questionId: "14",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "26",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "27",
        },
      ],
    },
    {
      question:
        "Возникало ли у Вас внезапное без понятных причин кратковременное онемение в одной руке, ноге или половине лица, губы или языка?",
      questionId: "15",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "28",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "29",
        },
      ],
    },
    {
      question:
        "Возникала у Вас когда-либо внезапно кратковременная потеря зрения на один глаз?",
      questionId: "16",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "30",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "31",
        },
      ],
    },
    {
      question: "Бывают ли у Вас отеки на ногах к концу дня?",
      questionId: "17",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "32",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "33",
        },
      ],
    },
    {
      question:
        "Бывают ли у Вас ежегодно периоды ежедневного кашля с отделением мокроты на протяжении примерно 3-х месяцев в году?",
      questionId: "18",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "34",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "35",
        },
      ],
    },
    {
      question:
        "Бывают ли у Вас свистящие или жужжащие хрипы в грудной клетке при дыхании, не проходящие при откашливании?",
      questionId: "19",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "36",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "37",
        },
      ],
    },
    {
      question: "Бывало ли у Вас когда-либо кровохарканье?",
      questionId: "20",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "38",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "39",
        },
      ],
    },
    {
      question:
        "Беспокоят ли Вас боли в области верхней части живота (в области желудка), отрыжка, тошнота, рвота, ухудшение или отсутствие аппетита? ",
      questionId: "21",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "40",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "41",
        },
      ],
    },
    {
      question: "Бывают ли у Вас кровяные выделения с калом?",
      questionId: "22",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "42",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "43",
        },
      ],
    },
    {
      question: "Курите ли Вы? (курение одной и более сигарет в день)",
      questionId: "23",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "44",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "45",
        },
      ],
    },
    {
      question:
        "Были ли у Вас переломы при падении с высоты своего роста, при ходьбе по ровной поверхности или перелом без видимой причины, в т.ч. перелом Позвонка?",
      questionId: "24",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "46",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "47",
        },
      ],
    },
    {
      question:
        "Считаете ли Вы, что Ваш рост заметно снизился за последние годы?",
      questionId: "25",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "48",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "49",
        },
      ],
    },
    {
      question:
        "Присутствует ли в Вашем ежедневном рационе 400−500 г сырых овощей и фруктов?",
      questionId: "26",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "0",
          variantId: "51",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "1",
          variantId: "50",
        },
      ],
    },
    {
      question:
        "Употребляете ли Вы белковую пищу (мясо, рыбу, бобовые, молочные продукты) 3 раза или более в неделю? ",
      questionId: "27",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "52",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "53",
        },
      ],
    },
    {
      question:
        "Тратите ли Вы ежедневно на ходьбу, утреннюю гимнастику и другие физические упражнения 30 минут и более?",
      questionId: "28",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "0",
          variantId: "55",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "1",
          variantId: "54",
        },
      ],
    },
    {
      question: "Были ли у Вас случаи падений за последний год?",
      questionId: "29",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "56",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "57",
        },
      ],
    },
    {
      question:
        "Испытываете ли Вы существенные ограничения в повседневной жизни из-за снижения зрения?",
      questionId: "30",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "58",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "59",
        },
      ],
    },
    {
      question:
        "Испытываете ли Вы существенные ограничения в повседневной жизни из-за снижения слуха? ",
      questionId: "31",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "60",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "61",
        },
      ],
    },
    {
      question:
        "Чувствуете ли Вы себя подавленным, грустным или встревоженным в последнее время?",
      questionId: "32",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "62",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "63",
        },
      ],
    },
    {
      question: "Страдаете ли Вы недержанием мочи?",
      questionId: "33",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "64",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "65",
        },
      ],
    },
    {
      question:
        "Испытываете ли Вы затруднения при перемещении по дому, улице (ходьба на 100 м), подъем на 1 лестничный пролет? ",
      questionId: "34",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "66",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "67",
        },
      ],
    },
    {
      question:
        "Есть ли у Вас проблемы с памятью, пониманием, ориентацией или способностью планировать?",
      questionId: "35",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "68",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "69",
        },
      ],
    },
    {
      question:
        "Считаете ли Вы, что заметно похудели за последнее время (не менее 5 кг за Полгода)?",
      questionId: "36",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "70",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "71",
        },
      ],
    },
    {
      question:
        "Если Вы похудели, считаете ли Вы, что это связано со специальным соблюдением диеты или увеличением физической активности?",
      questionId: "37",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "72",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "73",
        },
      ],
    },
    {
      question:
        "Если Вы похудели, считаете ли Вы, что это связано со снижением аппетита?",
      questionId: "38",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "74",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "75",
        },
      ],
    },
    {
      question:
        "Сколько лекарственных препаратов Вы принимаете ежедневно или несколько раз в неделю?",
      questionId: "39",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "76",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "77",
        },
      ],
    },
    {
      question:
        "Есть ли у Вас другие жалобы на свое здоровье, не вошедшие в настоящую анкету и которые Вы бы хотели сообщить врачу (фельдшеру)?",
      questionId: "40",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "78",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "79",
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
    isLoading,
    successText,
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
      isLoading={isLoading}
      successText={successText}
    />
  );
};
