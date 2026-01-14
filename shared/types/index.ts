export interface IQuiz {
  title: string;
  step: number;
  questions: IQuestion[];
  dictionary: Array<IDictionaryElem>;
  extraDictionary?: Array<IExtraDictionary>;
  conditions?: Array<(arr: string[], userData?: IUserData) => string>;
}

export interface IExtraDictionary {
  questions: {
    variantsIds: string[];
    condition: number;
    result: string;
    extraDescription: string[];
  };
}

export interface IDictionaryElem {
  questionId: string;
  variants: IDictionaryVariant[];
}

interface IDictionaryVariant {
  variantId: string;
  result: string;
  extraDescription: string;
  condition?: number;
  valuesArr?: string[];
}

interface IQuestion {
  img?: string;
  question: string;
  variants: IVariant[];
  questionId: string;
}

export interface IVariant {
  inputType?: "checkbox" | "text";
  text: string;
  value: string;
  variantId: string;
  plusStep?: number;
}

export interface IResult {
  isShowResult: boolean;
  answers: IVariant[];
}

export interface IUserData {
  gender?: "male" | "female";
  name?: string | null;
  surname?: string | null;
  patronymic?: string | null;
  dateOfBirth?: string | null;
  isCompleteData: boolean;
  error: boolean;
}
