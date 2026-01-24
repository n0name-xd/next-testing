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
      questionId: "12", //в2
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
          value: "0",
          variantId: "53",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "1",
          variantId: "52",
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
          text: "5 и более",
          value: "1",
          variantId: "76",
        },
        {
          inputType: "checkbox",
          text: "До 5",
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
        variantsIds: ["1"],
        condition: 1,
        result: "",
        extraDescription: [
          "Креатинин",
          "Скорость клубочковой фильтрации (СКФ)",
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Альбуминурия в разовой порции мочи",
          "Электрокардиограмма (ЭКГ)",
          "Эхокардиограмма (ЭХО-КГ)",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["5"],
        condition: 1,
        result: "",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Глюкоза плазмы натощак",
          "Гликозилированный гемоглобин (HbA1c)",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["9"],
        condition: 1,
        result: "",
        extraDescription: ["Врач онколог"],
      },
    },
    {
      questions: {
        variantsIds: ["12"],
        condition: 1,
        result: "",
        extraDescription: [
          "Скорость клубочковой фильтрации (СКФ)",
          "Триглицериды (ТГ)",
          "УЗИ брахиоцефальных артерий",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["14"],
        condition: 1,
        result: "",
        extraDescription: [
          "УЗИ сонных артерий; допплеровское исследование сонных артерий",
          "Трансаминазы (АЛАТ, АСАТ)",
          "Креатинкиназа общая и МВ (КФКобщ, КФКмб)",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["16"],
        condition: 1,
        result: "",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Триглицериды (ТГ)",
          "УЗИ брахиоцефальных артерий",
          "Холестерин-липопротеины высокой плотности (ХС-ЛПВП)",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["18"],
        condition: 1,
        result: "",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Глюкоза плазмы натощак",
          "Трансаминазы (АЛАТ, АСАТ)",
          "Креатинкиназа общая и МВ (КФКобщ, КФКмб)",
          "Врач-невролог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["20"],
        condition: 1,
        result: "",
        extraDescription: [
          "Сатурация кислорода в крови (SpO2);",
          "Спирометрия с тестом на обратимость бронхиальной обструкции",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["22"],
        condition: 1,
        result: "",
        extraDescription: [
          "Креатинин",
          "Скорость клубочковой фильтрации (СКФ)",
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Общий анализ крови (ОАК)",
          "Уровень N-концевого пропептида натрийуретического гормона (В-типа) (NT-proBNP)",
          "Триглицериды (ТГ)",
          "Холестерин-липопротеины высокой плотности (ХС-ЛПВП)",
          "Врач-кардиолог",
          "Рентгенография органов грудной клетки",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["26", "28", "30"],
        condition: 1,
        result: "",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "УЗИ брахиоцефальных артерий",
          "Врач-невролог",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["32"],
        condition: 1,
        result: "",
        extraDescription: [
          "Скорость клубочковой фильтрации (СКФ)",
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Эхокардиограмма (ЭХО-КГ)",
          "Пациентам при терапии варфарином – международное нормализованное отношение (МНО)",
          "Общий анализ крови (ОАК)",
          "Уровень N-концевого пропептида натрийуретического гормона (В-типа) (NT-proBNP)",
          "Гликозилированный гемоглобин (HbA1c)",
          "Триглицериды (ТГ)",
          "Холестерин-липопротеины высокой плотности (ХС-ЛПВП)",
          "Рентгенография органов грудной клетки",
          "Натрий и калий",
          "Мочевина",
          "Щелочная фосфатаза ",
          "Гамма-глютамилтрансфераза ",
          "Билирубин",
          "Ферритин",
          "Насыщение трансферрина железом",
          "ТТГ",
          "Общий анализ мочи (ОАМ)",
          "Мониторирование ЭКГ",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["34", "36"],
        condition: 1,
        result: "",
        extraDescription: [
          "Сатурация кислорода в крови (SpO2)",
          "Спирометрия",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["38"],
        condition: 1,
        result: "",
        extraDescription: [
          "Сатурация кислорода в крови (SpO2)",
          "Рентгенография и/или компьютерная томография легких",
          "Спирометрия с тестом на обратимость бронхиальной обструкции",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["40"],
        condition: 1,
        result: "",
        extraDescription: [
          "Креатинин",
          "Общий анализ крови (ОАК)",
          "Эзофагогастродуоденоскопия (ЭГДС)",
          "Трансаминазы (АЛАТ, АСАТ)",
          "Мочевина",
          "Билирубин",
          "Общий белок крови",
          "Кал на скрытую кровь",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["42"],
        condition: 1,
        result: "",
        extraDescription: [
          "Врач-хирург или врач-колопроктолог",
          "Колоноскопия",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["46", "48"],
        condition: 1,
        result: "",
        extraDescription: [
          "Креатинин",
          "Щелочная фосфатаза ",
          "Кальций",
          "Фосфор",
          "Двухэнергетическая рентгеновская абсорбциометрия (ДРА) поясничного отдела позвоночника и проксимального отдела бедренной кости",
          "Врач-ревматолог или врач-эндокринолог",
          "Врач терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["56"],
        condition: 1,
        result: "",
        extraDescription: ["Врач-невролог"],
      },
    },
    {
      questions: {
        variantsIds: ["58"],
        condition: 1,
        result: "",
        extraDescription: ["Врач-офтальмолог"],
      },
    },
    {
      questions: {
        variantsIds: ["60"],
        condition: 1,
        result: "",
        extraDescription: ["Врач-отоларинголог (ЛОР)"],
      },
    },
    {
      questions: {
        variantsIds: ["62"],
        condition: 1,
        result: "",
        extraDescription: ["Врач-невролог"],
      },
    },
    {
      questions: {
        variantsIds: ["64"],
        condition: 1,
        result: "",
        extraDescription: [
          "Для мужчин–осмотр (консультация) врача хирурга (врача уролога), для женщин – врача-уролога или врача-акушера-гинеколога",
        ],
      },
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
          extraDescription: "",
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
      questionId: "4",
      variants: [
        {
          variantId: "7",
          result: "Принимает препараты для снижения уровня сахара",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "5",
      variants: [
        {
          variantId: "9",
          result: "Вероятность злокачественного новообразования",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "7",
      variants: [
        {
          variantId: "12",
          result: "Вероятность повышенного уровня холестерина",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "8",
      variants: [
        {
          variantId: "14",
          result: "Принимает препараты для снижения уровня холестерина",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "9",
      variants: [
        {
          variantId: "16",
          result: "Отягощенный личный анамнез по инфаркту",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "10",
      variants: [
        {
          variantId: "18",
          result: "Отягощенный личный анамнез по инсульту",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "11",
      variants: [
        {
          variantId: "20",
          result:
            "Отягощенный личный анамнез по хроническому бронхиту или бронхиальной астме",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "17",
      variants: [
        {
          variantId: "32",
          result: "Вероятность наличия сердечной недостаточности",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "20",
      variants: [
        {
          variantId: "38",
          result:
            "Вероятность заболевания легких (бронхоэктазы, онкопатология, туберкулез)",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "21",
      variants: [
        {
          variantId: "40",
          result:
            "Вероятность заболевания верхних отделов желудочно-кишечного тракта",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "22",
      variants: [
        {
          variantId: "42",
          result:
            "Вероятность заболевания нижних отделов желудочно-кишечного тракта",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "23",
      variants: [
        {
          variantId: "44",
          result: "Курит в настоящее время",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "28",
      variants: [
        {
          variantId: "54",
          result: "Фактор риска «низкая физическая активность»",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "29",
      variants: [
        {
          variantId: "56",
          result: "Имеется риск падений",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "30",
      variants: [
        {
          variantId: "58",
          result: "Вероятность снижения зрения",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "31",
      variants: [
        {
          variantId: "60",
          result: "Риск снижения слуха",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "32",
      variants: [
        {
          variantId: "62",
          result: "Риск депрессии",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "33",
      variants: [
        {
          variantId: "64",
          result: "Наличие проблемы с удержанием мочи",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "34",
      variants: [
        {
          variantId: "66",
          result: "Вероятность ограничения мобильности",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "35",
      variants: [
        {
          variantId: "68",
          result: "Вероятность наличия когнитивных нарушений",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "39",
      variants: [
        {
          variantId: "76",
          result: "Риск полипрагмазии",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "40",
      variants: [
        {
          variantId: "78",
          result: "Риск наличия заболевания и/или его обострения",
          extraDescription: "",
        },
      ],
    },
  ],
  conditions: [
    (arr) => {
      if (arr.includes("22") && arr.includes("24")) {
        // Ответ ДА» на вопрос 2 или на оба (2 и 3)вопроса. Имеется вероятность стенокардии
        return "Имеется вероятность стенокардии";
      }

      if (arr.includes("22")) {
        return "Имеется вероятность стенокардии";
      }

      return "";
    },
    (arr) => {
      if (arr.includes("26") || arr.includes("28") || arr.includes("30")) {
        //Ответ «ДА» хотя бы на один вопрос имеется вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК
        return "Имеется вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК";
      }
      return "";
    },
    (arr) => {
      if (arr.includes("34") || arr.includes("36")) {
        //Ответ «ДА» хотя бы на один вопрос имеется вероятность хронического заболевания нижних дыхательных путей
        return "Имеется вероятность хронического заболевания нижних дыхательных путей";
      }
      return "";
    },
    (arr) => {
      if (arr.includes("42") && arr.includes("70")) {
        //Ответ «ДА» на вопрос 12 в сочетании с ответом «ДА» на вопрос 26 и/или «НЕТ» на вопрос 27 - вероятность заболевания нижних отделов ЖКТ
        return "Вероятность заболеваний нижних отделов желудочнокишечного тракта";
      }

      if (arr.includes("42") && arr.includes("73")) {
        return "Вероятность заболеваний нижних отделов желудочнокишечного тракта";
      }

      return "";
    },
    (arr) => {
      if (arr.includes("46") || arr.includes("48")) {
        //Ответ «ДА» хотя бы на один вопрос (14 и 15) имеется риск остеопороза
        return "Имеется вероятность хронического заболевания нижних дыхательных путей";
      }
      return "";
    },
    (arr) => {
      if (arr.includes("50") && arr.includes("52")) {
        //Ответ «НЕТ» на оба вопроса − нерациональное питание
        return "Нерациональное питание";
      }
      return "";
    },
    (arr) => {
      if (arr.includes("70") && arr.includes("73") && arr.includes("74")) {
        //Ответ «ДА» на вопрос 26 в сочетании с ответом «НЕТ» на вопрос 27 и ответом «ДА» на вопрос 28 – вероятность онкопатологии
        return "Вероятность онкопатологии";
      }
      return "";
    },
    (arr) => {
      if (arr.includes("34") && arr.includes("50")) {
        //Ответ «ДА» на вопрос 13 и на вопрос 5 (отягощенная наследственность по раку легкого)
        return "Отягощенная наследственность по раку легкого";
      }

      return "";
    },
    (arr) => {
      if (arr.includes("56") && arr.includes("52")) {
        //Ответ «ДА» на вопрос 16 в сочетании с ответом «ДА» на вопрос 14 и/или 15 − вероятность заболеваний верхних отделов желудочнокишечного тракта
        return "Вероятность заболеваний верхних отделов желудочнокишечного тракта";
      }

      if (arr.includes("56") && arr.includes("54")) {
        return "Вероятность заболеваний верхних отделов желудочнокишечного тракта";
      }

      return "";
    },
    (arr) => {
      if (arr.includes("56") && arr.includes("58")) {
        // Ответ «ДА» на вопрос 16 в сочетании с ответом «ДА» на вопрос 17 и/или 18 − вероятность заболевания нижних отделов ЖКТ
        return "Вероятность заболевания нижних отделов желудочнокишечного тракта";
      }

      if (arr.includes("56") && arr.includes("60")) {
        return "Вероятность заболевания нижних отделов желудочнокишечного тракта";
      }

      return "";
    },
    (arr) => {
      if (arr.includes("34") && arr.includes("62")) {
        // Ответ «ДА» на вопрос 19 и на вопрос 5 - отягощенная наследственность по раку легкого
        return "Отягощенная наследственность по раку легкого";
      }

      return "";
    },
    (arr) => {
      if (arr.includes("67") && arr.includes("69")) {
        // Ответ «НЕТ» на вопрос 22 и/или ответ «ДА» на вопрос 23 − фактор риска «нерациональное питание»
        return "Фактор риска «нерациональное питание»";
      }

      if (arr.includes("67")) {
        return "Фактор риска «нерациональное питание»";
      }

      return "";
    },
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
        return "Риск пагубного потребления алкоголя";
      }

      return "";
    },
    (arr) => {
      const sumArr = ["56", "58", "60", "62", "64", "66", "68"];
      let sum = 0;

      arr.forEach((e) => {
        if (sumArr.includes(e)) {
          sum++;
        }
      });

      if (sum >= 3) {
        return "Имеется риск старческой астении";
      }

      return "";
    },
  ],
  conditionsResult: [
    (arr, userData) => {
      if (arr.includes("64")) {
        return userData?.gender === "male"
          ? "Осмотр (консультация) врача хирурга (врача уролога)"
          : "Осмотр (консультация) врача-уролога или врача-акушера-гинеколог";
      }
      return "";
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
    isSHowTableResult,
    tableResult,
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
        isSHowTableResult={isSHowTableResult}
      tableResult={tableResult}
    />
  );
};
