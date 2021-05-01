import snowmanlabsApi from "./snowmanlabsApi";
import { TNewQuestion } from "../types/types";

export default {
  getQuestions: () => snowmanlabsApi.get("/questions"),
  sendQuestion: (question: TNewQuestion) =>
    snowmanlabsApi.post("/questions", question),
};
