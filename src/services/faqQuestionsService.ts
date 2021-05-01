import snowmanlabsApi from "./snowmanlabsApi";
import { TNewQuestion } from "../types/types";

const faqQuestionsService = {
  getQuestions: () => snowmanlabsApi.get("/questions"),
  sendQuestion: (question: TNewQuestion) =>
    snowmanlabsApi.post("/questions", question),
};

export default faqQuestionsService;
