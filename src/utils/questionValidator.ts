import { string, object, SchemaOf } from "yup";
import { TNewQuestion } from "../types/types";

const newQuestionSchema: SchemaOf<TNewQuestion> = object({
  title: string().required(),
  answer: string().required(),
  color: string().required(),
});

export default newQuestionSchema;
