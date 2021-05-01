import axios from "axios";
import { SNOWMANLABS_QUESTIONS_API } from "../config.json";

export default axios.create({
  baseURL: SNOWMANLABS_QUESTIONS_API,
  headers: { Accept: "application/json" },
});
