export interface IQuestion {
  id: string;
  title: string;
  answer: string;
  color: string;
}

export type TNewQuestion = Pick<IQuestion, "title" | "answer" | "color">;
