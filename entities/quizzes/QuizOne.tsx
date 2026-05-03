"use client";

import { useQuiz } from "@/shared/hooks/useQuiz";
import type { IQuiz } from "@/shared/types";
import { Quiz } from "@/shared/ui/Quiz";

const QUIZ: IQuiz = {
  title:
    "Анкета для граждан в возрасте до 65 лет на выявление хронических неинфекционных заболеваний.",
  step: 1,
  questions: [
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется гипертоническая болезнь (повышенное артериальное давление)?",
      questionId: "1", //1.1
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
        "Говорил ли Вам врач когда-либо, что у Вас имеется Злокачественное новообразование?",
      questionId: "11",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "21",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "22",
          plusStep: 1,
        },
      ],
    },
    {
      question: "Какое злокачественное новообразование?",
      questionId: "12",
      variants: [
        {
          inputType: "text",
          text: "",
          value: "1",
          variantId: "23",
        },
      ],
    },
    {
      question:
        "Говорил ли Вам врач когда-либо, что у Вас имеется повышенный уровень холестерина?",
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
          plusStep: 1,
        },
      ],
    },
    {
      question: "Принимаете ли Вы препараты для снижения уровня холестерина?",
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
      question: "Был ли у Вас инфаркт миокарда?",
      questionId: "15", //в2
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
      question: "Был ли у Вас инсульт?",
      questionId: "16", //в3
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
      question: "Принимаете ли вы варфарин?",
      questionId: "42",
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "90",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "91",
        },
      ],
    },
    {
      question:
        "Был ли инфаркт миокарда или инсульт у Ваших близких родственников в молодом или среднем возрасте (до 65 лет у матери или родных сестер или до 55 лет у отца или родных братьев)?",
      questionId: "17", //в4
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
        "Были ли у Ваших близких родственников в молодом или среднем возрасте злокачественные новообразования?",
      questionId: "18", //в5
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
          plusStep: 1,
        },
      ],
    },
    {
      question:
        "Уточните какое злокачественное новообразование было у родственников",
      questionId: "118",
      variants: [
        {
          inputType: "checkbox",
          text: "Легкого",
          value: "1",
          variantId: "134",
        },
        {
          inputType: "checkbox",
          text: "Желудка",
          value: "2",
          variantId: "135",
        },
        {
          inputType: "checkbox",
          text: "Кишечника",
          value: "3",
          variantId: "136",
        },
        {
          inputType: "checkbox",
          text: "Толстой кишки",
          value: "4",
          variantId: "137",
        },
        {
          inputType: "checkbox",
          text: "Прямой кишки",
          value: "5",
          variantId: "138",
        },
        {
          inputType: "checkbox",
          text: "Предстательной железы",
          value: "6",
          variantId: "139",
        },
        {
          inputType: "checkbox",
          text: "Молочной железы",
          value: "7",
          variantId: "140",
        },
        {
          inputType: "checkbox",
          text: "Матки",
          value: "8",
          variantId: "141",
        },
        {
          inputType: "checkbox",
          text: "Полипоз желудка",
          value: "9",
          variantId: "143",
        },
        {
          inputType: "checkbox",
          text: "Семейный аденоматоз",
          value: "12",
          variantId: "144",
        },
        {
          inputType: "checkbox",
          text: "Семейный диффузный полипоз толстой кишки",
          value: "11",
          variantId: "145",
        },
        {
          inputType: "checkbox",
          text: "Опухоли других локализаций",
          value: "23",
          variantId: "142",
        },
      ],
    },
    {
      question:
        "Возникает ли у Вас, когда поднимаетесь по лестнице, идете в гору или спешите, или при выходе из теплого помещения на холодный воздух, боль или ощущение давления, жжения, тяжести или явного дискомфорта за грудиной и (или) в левой половине грудной клетки, и (или) в левом плече, и (или) в левой руке?",
      questionId: "19", //в6
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
          plusStep: 1,
        },
      ],
    },
    {
      question:
        "Указанные боли ощущения/дискомфорт исчезают сразу или в течение не более чем 20 мин после прекращения ходьбы/адаптации к холоду/ в тепле/в покое и (или) они исчезают через 1−5 мин после приема нитроглицерина",
      questionId: "20", //в7
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
        "Возникала ли у Вас когда-либо внезапная кратковременная слабость или неловкость при движении в одной руке (ноге) либо руке и ноге одновременно так, что Вы не могли взять или удержать предмет, встать со стула, пройтись по комнате?",
      questionId: "21", //в8
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
      question:
        "Возникало ли у Вас когда-либо внезапное без явных причин кратковременное онемение в одной руке, ноге или половине лица, губы или языка?",
      questionId: "22", //в9
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
      question:
        "Возникала ли у Вас когда-либо внезапно кратковременная потеря зрения на один глаз?",
      questionId: "23", //в10
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
        "Бывают ли у Вас ежегодно периоды ежедневного кашля с отделением мокроты на протяжении примерно 3 месяцев в году?",
      questionId: "24", //в11
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
        "Бывают ли у Вас свистящие или жужжащие хрипы в грудной клетке при дыхании, не проходящие при откашливании?",
      questionId: "25", //в12
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
      question: "Бывало ли у Вас когда-либо кровохарканье?",
      questionId: "26", //в13
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "50",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "51",
        },
      ],
    },
    {
      question:
        "Беспокоят ли Вас боли в области верхней части живота (в области желудка), отрыжка, тошнота, рвота, ухудшение или отсутствие аппетита?",
      questionId: "27", //в14
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
        "Бывает ли у Вас неоформленный (полужидкий) черный или дегтеобразный стул?",
      questionId: "28", //в15
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "54",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "55",
        },
      ],
    },
    {
      question:
        "Похудели ли Вы за последнее время без видимых причин (т.е. без соблюдения диеты или увеличения физической активности и пр.)?",
      questionId: "29", //в16
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
      question: "Бывает ли у Вас боль в области заднепроходного отверстия?",
      questionId: "30", //в17
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
      question: "Бывают ли у Вас кровяные выделения с калом?",
      questionId: "31", //в18
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
      question: "Курите ли Вы? (курение одной и более сигарет в день)",
      questionId: "32", //в19
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
          plusStep: 1,
        },
      ],
    },
    {
      question: "Cколько в среднем сигарет в день выкуриваете?",
      questionId: "33", //в20
      variants: [
        {
          inputType: "checkbox",
          text: "20 сигарет и более",
          value: "1",
          variantId: "64",
        },
        {
          inputType: "checkbox",
          text: "Менее 20",
          value: "0",
          variantId: "165",
        },
      ],
    },
    {
      question:
        "Сколько минут в день Вы тратите на ходьбу в умеренном или быстром темпе (включая дорогу до места работы и обратно)?",
      questionId: "34", //в21
      variants: [
        {
          inputType: "checkbox",
          text: "До 30 минут",
          value: "1",
          variantId: "65",
        },
        {
          inputType: "checkbox",
          text: "30 минут и более",
          value: "0",
          variantId: "66",
        },
      ],
    },
    {
      question:
        "Присутствует ли в Вашем ежедневном рационе 400−500 г сырых овощей и фруктов?",
      questionId: "35", //в22
      variants: [
        {
          inputType: "checkbox",
          text: "Нет",
          value: "1",
          variantId: "67",
        },
        {
          inputType: "checkbox",
          text: "Да",
          value: "0",
          variantId: "68",
        },
      ],
    },
    {
      question:
        "Имеете ли Вы привычку подсаливать приготовленную пищу, не пробуя ее?",
      questionId: "36", //в23
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "69",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "70",
        },
      ],
    },
    {
      question:
        "Принимали ли Вы за последний год психотропные или наркотические вещества без назначения врача?",
      questionId: "37", //в24
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "71",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "72",
        },
      ],
    },
    {
      question: "Как часто Вы употребляете алкогольные напитки?",
      questionId: "38", //в25
      variants: [
        {
          inputType: "checkbox",
          text: "Никогда",
          value: "0",
          variantId: "73",
          plusStep: 2,
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
      questionId: "39", //в26
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
      questionId: "40", //в27
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
    {
      question:
        "Есть ли у Вас другие жалобы на свое здоровье, не вошедшие в настоящую анкету и которые Вы бы хотели сообщить врачу (фельдшеру)?",
      questionId: "41", //в28
      variants: [
        {
          inputType: "checkbox",
          text: "Да",
          value: "1",
          variantId: "88",
        },
        {
          inputType: "checkbox",
          text: "Нет",
          value: "0",
          variantId: "89",
        },
      ],
    },
  ],
  extraDictionary: [
    {
      questions: {
        variantsIds: ["1"],
        condition: 1,
        result: "!",
        extraDescription: [
          "Креатинин",
          "Скорость клубочковой фильтрации (СКФ)",
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Альбуминурия в разовой порции мочи",
          "Электрокардиограмма (ЭКГ)",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["5"],
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Креатинин",
          "Скорость клубочковой фильтрации (СКФ)",
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Общий анализ крови (ОАК)",
          "Врач-терапевт",
          "Врач-кардиолог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["7"],
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Врач-невролог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["9"], //Хроническое заболевание бронхов или легких Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Сатурация кислорода в крови (SpO2)",
          "Функция внешнего дыхания (ФВД)",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["11"], //Туберкулез Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: ["Рентген легких", "Врач-фтизиатр"],
      },
    },
    {
      questions: {
        variantsIds: ["13"], //Сахарный диабет или повышенный уровень сахара в крови
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Глюкоза плазмы натощак",
          "Гликозилированный гемоглобин (HbA1c)",
          "Врач-терапевт",
          "Врач-эндокринолог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["15"],
        condition: 1,
        result: "!!!!!!",
        extraDescription: ["Принимает препараты для снижения уровня сахара"],
      },
    },
    {
      questions: {
        variantsIds: ["17"], //Заболевания желудка Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Эзофагогастродуоденоскопия (ЭГДС)",
          "Врач-гастроэнтеролог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["19"], //Хроническое заболевание почек Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Скорость клубочковой фильтрации (СКФ)",
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["21"], //Злокачественное новообразование Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: ["Врач-онколог"],
      },
    },
    {
      questions: {
        variantsIds: ["24"], //Повышенный уровень холестерина Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Скорость клубочковой фильтрации (СКФ)",
          "Триглицериды (ТГ)",
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Холестерин-липопротеины высокой плотности (ХС-ЛПВП)",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["26"], // Принимает препараты для снижения уровня холестерина Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: ["Трансаминазы (АЛАТ, АСАТ)"],
      },
    },
    {
      questions: {
        variantsIds: ["28"], // Инфаркт Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Эхокардиография (ЭхоКГ)",
          "Триглицериды (ТГ)",
          "Холестерин-липопротеины высокой плотности (ХС-ЛПВП)",
          "Врач-кардиолог",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["30"], // Инсульт Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Глюкоза плазмы натощак",
          "Трансаминазы (АЛАТ, АСАТ)",
          "Врач-невролог",
          "УЗИ брахиоцефальных артерий",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["32"], //инфаркт миокарда или инсульт у Ваших близких родственников в молодом или среднем возрасте Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Триглицериды (ТГ)",
          "Холестерин-липопротеины высокой плотности (ХС-ЛПВП)",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["34"], //Злокачественные новообразования у близких родственников в молодом или среднем возрасте  Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Врач-хирург или врач-колопроктолог",
          "Врач-кардиолог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["36"], // вероятность стенокардии Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Креатинин",
          "Скорость клубочковой фильтрации (СКФ)",
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Общий анализ крови (ОАК)",
          "Врач-кардиолог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["40"], // вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Триглицериды (ТГ)",
          "Холестерин-липопротеины высокой плотности (ХС-ЛПВП)",
          "Врач-невролог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["42"], // вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Триглицериды (ТГ)",
          "Холестерин-липопротеины высокой плотности (ХС-ЛПВП)",
          "Врач-невролог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["44"], // вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Холестерин-липопротеины низкой плотности (ХС-ЛПНП)",
          "Электрокардиограмма (ЭКГ)",
          "Триглицериды (ТГ)",
          "Холестерин-липопротеины высокой плотности (ХС-ЛПВП)",
          "Врач-невролог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["46"], // периоды ежедневного кашля с отделением мокроты Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Спирометрия",
          "Сатурация кислорода в крови (SpO2)",
          "Функция внешнего дыхания (ФВД)",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["48"], // свистящие или жужжащие хрипы в грудной клетке при дыхании Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Спирометрия",
          "Сатурация кислорода в крови (SpO2)",
          "Функция внешнего дыхания (ФВД)",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["50"], // Кровохаркание Да
        condition: 1,
        result: "!!!!!!",
        extraDescription: [
          "Рентгенография и/или компьютерная томография легких",
          "Врач-терапевт",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["52", "56"], //
        condition: 2,
        result: "!!!!!!",
        extraDescription: ["Эзофагогастродуоденоскопия (ЭГДС)"],
      },
    },
    {
      questions: {
        variantsIds: ["54", "56"], //
        condition: 2,
        result: "!!!!!!",
        extraDescription: ["Эзофагогастродуоденоскопия (ЭГДС)"],
      },
    },
    {
      questions: {
        variantsIds: ["56", "58"], //
        condition: 2,
        result: "!!!!!!",
        extraDescription: ["Врач-хирург или врач-колопроктолог"],
      },
    },
    {
      questions: {
        variantsIds: ["56", "60"], //
        condition: 2,
        result: "!!!!!!",
        extraDescription: ["Врач-хирург или врач-колопроктолог"],
      },
    },
    {
      questions: {
        variantsIds: ["62", "34"], //
        condition: 2,
        result: "!!!!!!",
        extraDescription: [
          "Рентгенография и/или компьютерная томография легких",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["5", "36", "38"], // Несколько ДА
        condition: 3,
        result: "!!!!!!",
        extraDescription: [
          "Эхокардиография (ЭхоКГ)",
          "Врач-терапевт",
          "Врач-кардиолог",
        ],
      },
    },
    {
      questions: {
        variantsIds: ["1", "24"], // несколько ДА
        condition: 2,
        result: "!!!!!!",
        extraDescription: ["УЗИ брахиоцефальных артерий"],
      },
    },
    {
      questions: {
        variantsIds: ["90"],
        condition: 1,
        result: "",
        extraDescription: ["Протромбиновое время (МНО)"],
      },
    },
  ],
  conditions: [
    (arr) => {
      if (arr.includes("36") && arr.includes("36")) {
        // Ответ ДА» на вопрос 6 или на оба (6 и 7)вопроса. Имеется вероятность стенокардии
        return "Имеется вероятность стенокардии";
      }

      if (arr.includes("36")) {
        return "Имеется вероятность стенокардии";
      }

      return "";
    },
    (arr) => {
      if (arr.includes("40") || arr.includes("42") || arr.includes("44")) {
        //Ответ «ДА» хотя бы на один вопрос имеется вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК
        return "Имеется вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК";
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
      if (arr.includes("134"))
        return "У родственника было злокачественное новообразование легкого";
      if (arr.includes("135"))
        return "У родственника было злокачественное новообразование желудка";
      if (arr.includes("136"))
        return "У родственника было злокачественное новообразование кишечника";
      if (arr.includes("137"))
        return "У родственника было злокачественное новообразование толстой кишки";
      if (arr.includes("138"))
        return "У родственника было злокачественное новообразование прямой кишки";
      if (arr.includes("139"))
        return "У родственника было злокачественное новообразование предстательной железы";
      if (arr.includes("140"))
        return "У родственника было злокачественное новообразование молочной железы";
      if (arr.includes("141"))
        return "У родственника было злокачественное новообразование матки";
      if (arr.includes("142"))
        return "У родственника было злокачественное новообразование опухоли других локализаций";
      if (arr.includes("143"))
        return "У родственника было злокачественное новообразование полипоз желудка";
      if (arr.includes("144"))
        return "У родственника было злокачественное новообразование семейный аденоматоз";
      if (arr.includes("145"))
        return "У родственника было злокачественное новообразование семейный диффузный полипоз толстой кишки";

      return "";
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
      questionId: "3",
      variants: [
        {
          variantId: "5",
          result: "Вероятность ишемической болезни сердца (стенокардии)",
          extraDescription:
            "• Вес (индекс массы тела), окружность талии, статус курения; артериальное давление, частота сердечных сокращений \n • Креатинин \n • Скорость клубочковой фильтрации \n • Холестерин-липопротеины низкой плотности",
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
            "• Вес (индекс массы тела), окружность талии, статус курения; артериальное давление, частота сердечных сокращений \n • Холестерин-липопротеины низкой плотности \n • УЗИ  сонных артерий; допплеровского исследования сонных артерий",
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
          extraDescription: "",
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
    {
      questionId: "11",
      variants: [
        {
          variantId: "21",
          result: "Вероятность злокачественного новообразования",
          extraDescription: "• Врач-онколог",
        },
      ],
    },
    {
      questionId: "12",
      variants: [
        {
          variantId: "23",
          result: "",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "13",
      variants: [
        {
          variantId: "24",
          result: "Вероятность повышенного уровня холестерина",
          extraDescription:
            "• вес ( ИМТ ), окружность талии , статус курения ; АД, ЧСС \n • ХС- ЛПНП \n • триглицериды \n • УЗИ брахиоцефальных артерий",
        },
      ],
    },
    {
      questionId: "14",
      variants: [
        {
          variantId: "26",
          result: "Принимает препараты для снижения уровня холестерина",
          extraDescription:
            "• трансаминазы \n • креатинкиназы \n • УЗИ сонных артерий",
        },
      ],
    },
    {
      questionId: "15",
      variants: [
        {
          variantId: "28",
          result: "Отягощенный личный анамнез по инфаркту",
          extraDescription:
            "• Триглицериды \n • ХС-ЛПВП \n • ХС-ЛПНП \n • ЭКГ \n • УЗИ сосудов шеи",
        },
      ],
    },
    {
      questionId: "16",
      variants: [
        {
          variantId: "30",
          result: "Отягощенный личный анамнез по инсульту",
          extraDescription:
            "• Вес ( ИМТ ), окружность талии, статус курения ; АД, ЧСС ; \n • глюкоза плазмы крови (натощак) \n • ЭКГ \n • при терапии статинами: трансаминазы, КФК \n • ХС- ЛПНП \n • врач-невролог",
        },
      ],
    },
    {
      questionId: "17",
      variants: [
        {
          variantId: "32",
          result: "Отягощенная наследственность по инфаркту и инсульту",
          extraDescription: "• Триглицериды \n • ХС-ЛПВП \n • ХС-ЛПНП",
        },
      ],
    },
    {
      questionId: "18",
      variants: [
        {
          variantId: "34",
          result:
            "Отягощенная наследственность и высокий риск развития колоректального рака",
          extraDescription:
            "• врач-хирург или врач-колопроктолог \n • колоноскопия",
        },
      ],
    },
    //Вопросы 6 и 7
    // {
    //   questionId: "19",
    //   variants: [
    //     {
    //       variantId: "36",
    //       result: "Имеется вероятность стенокардии",
    //       extraDescription:
    //         "• Вес ( ИМТ ), окружность талии, статус курения; АД, ЧСС \n • врач-кардиолог \n • Креатинин \n • скорость клубочковой фильтрации \n • ХС- ЛПНП \n • пациентам при терапии варфарином – международное нормализованное отношение \n • ЭКГ \n • ЭхоКГ \n • Общий анализ крови \n • уровень N-концевого пропептида натрийуретического гормона (В-типа)",
    //     },
    //   ],
    // },
    // {
    //   questionId: "20",
    //   variants: [
    //     {
    //       variantId: "38",
    //       result: "Имеется вероятность стенокардии",
    //       extraDescription: "",
    //     },
    //   ],
    // },
    //Вопросы 8-10
    // {
    //   questionId: "21",
    //   variants: [
    //     {
    //       variantId: "40",
    //       result:
    //         "Имеется вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК",
    //       extraDescription:
    //         "• врач-невролог \n • Триглицериды \n • ХС-ЛПВП \n • ХС-ЛПНП \n • ЭКГ \n • УЗИ сосудов шеи",
    //     },
    //   ],
    // },
    // {
    //   questionId: "22",
    //   variants: [
    //     {
    //       variantId: "42",
    //       result:
    //         "Имеется вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК",
    //       extraDescription:
    //         "• врач-невролог \n • Триглицериды \n • ХС-ЛПВП \n • ХС-ЛПНП \n • ЭКГ \n • УЗИ сосудов шеи",
    //     },
    //   ],
    // },
    // {
    //   questionId: "23",
    //   variants: [
    //     {
    //       variantId: "44",
    //       result:
    //         "Имеется вероятность преходящей ишемической атаки (ТИА) или перенесенного ОНМК",
    //       extraDescription:
    //         "• врач-невролог \n • Триглицериды \n • ХС-ЛПВП \n • ХС-ЛПНП \n • ЭКГ \n • УЗИ сосудов шеи",
    //     },
    //   ],
    // },
    //Вопросы 11 и 12
    // {
    //   questionId: "24",
    //   variants: [
    //     {
    //       variantId: "46",
    //       result:
    //         "Имеется вероятность хронического заболевания нижних дыхательных путей",
    //       extraDescription: "• спирометрия",
    //     },
    //   ],
    // },
    // {
    //   questionId: "25",
    //   variants: [
    //     {
    //       variantId: "48",
    //       result:
    //         "Имеется вероятность хронического заболевания нижних дыхательных путей",
    //       extraDescription: "• функция внешнего дыхания \n • сатурация",
    //     },
    //   ],
    // },
    {
      questionId: "26",
      variants: [
        {
          variantId: "50",
          result:
            "Вероятность наличия заболевания легких (бронхоэктазы, онкопатология, туберкулез)",
          extraDescription:
            "• рентгенография и/или компьютерная томография легких",
        },
      ],
    },
    //Вопросы 14−16 и 16−18
    // {
    //   questionId: "27",
    //   variants: [
    //     {
    //       variantId: "52",
    //       result: "",
    //       extraDescription: "• эзофагогастродуоденоскопии (ЭГДС)",
    //       condition: 1,
    //       valuesArr: [],
    //     },
    //   ],
    // },
    // {
    //   questionId: "28",
    //   variants: [
    //     {
    //       variantId: "54",
    //       result:
    //         "«Да» если через один «Да», то вероятность заболеваний верхних отделов желудочно-кишечного тракта (если ответ НЕТ или здесь да, а через один НЕТ, то ничего не появляется)",
    //       extraDescription: "• эзофагогастродуоденоскопии (ЭГДС)",
    //     },
    //   ],
    // },
    // {
    //   questionId: "29",
    //   variants: [
    //     {
    //       variantId: "56",
    //       result:
    //         "Ответ появляется если «ДА» в сочетании либо с «ДА» в двух предыдущих, либо в двух следующих (самостоятельно не оценивается)",
    //       extraDescription: "• эзофагогастродуоденоскопии (ЭГДС)",
    //     },
    //   ],
    // },
    // {
    //   questionId: "30",
    //   variants: [
    //     {
    //       variantId: "58",
    //       result:
    //         "Если ДА в этом и предыдущем, то ответ Вероятность заболевания нижних отделов ЖКТ",
    //       extraDescription:
    //         "• врач-хирург или врач-колопроктолог \n • колоноскопия",
    //     },
    //   ],
    // },
    // {
    //   questionId: "31",
    //   variants: [
    //     {
    //       variantId: "60",
    //       result:
    //         "Если ДА в этом и позапрошлом, то ответ Вероятность заболевания нижних отделов ЖКТ",
    //       extraDescription:
    //         "• врач-хирург или врач-колопроктолог \n • колоноскопия",
    //     },
    //   ],
    // },
    {
      questionId: "32",
      variants: [
        {
          variantId: "62",
          result: "Фактор риска «курение»",
          extraDescription:
            "Оценить риск по шкале SCORE (за исключением лиц, имеющих ССЗ, обусловленные атеросклерозом, сахарный диабет 2 или хроническую болезнь почек): • в возрасте до 40 лет − относительный риск; • в возрасте 40−65 лет − абсолютный риск. Если отягощенная наследственность, то оценить клиническую картину с учетом результата флюорографии, определить дальнейшую тактику уточнения диагноза в рамках второго этапа диспансеризации (рентгенография легких и/или компьютерную томографию легких в случае подозрения на злокачественное новообразование легкого)  Предложить школу здорового образа жизни ",
        },
      ],
    },
    {
      questionId: "33",
      variants: [
        {
          variantId: "64",
          result: "Интенсивное курение",
          extraDescription: "",
        },
      ],
    },
    {
      questionId: "34",
      variants: [
        {
          variantId: "65",
          result: "Низкая физическая активность",
          extraDescription: "Предложить школу здорового образа жизни",
        },
      ],
    },
    //Вопросы 22 и 23
    // {
    //   questionId: "35",
    //   variants: [
    //     {
    //       variantId: "68",
    //       result: "фактор риска «нерациональное питание»",
    //       extraDescription: "Предложить школу здорового образа жизни",
    //     },
    //   ],
    // },
    // {
    //   questionId: "36",
    //   variants: [
    //     {
    //       variantId: "69",
    //       result: "фактор риска «нерациональное питание»",
    //       extraDescription: "Предложить школу здорового образа жизни",
    //     },
    //   ],
    // },
    {
      questionId: "37",
      variants: [
        {
          variantId: "71",
          result:
            "Вероятность потребления наркотических средств и психотропных веществ без назначения врача",
          extraDescription: "Консультация врача-нарколога",
        },
      ],
    },
    {
      questionId: "41",
      variants: [
        {
          variantId: "88",
          result: "Риск наличия заболевания или его обострения",
          extraDescription:
            "У пациенты есть жалобы, которые не вошли в опросный лист",
        },
      ],
    },
  ],
};

export const QuizOne = () => {
  const {
    quiz,
    result,
    value,
    commonUserData,
    isLoading,
    successText,
    isSHowTableResult,
    tableResult,
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
      isSHowTableResult={isSHowTableResult}
      tableResult={tableResult}
    />
  );
};
