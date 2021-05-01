import React, { ChangeEvent, useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import FaqExpansionPanel from "../../components/FaqExpansionPanel/index";
import NewQuestionButton from "../../components/NewQuestionButton";
import SearchInput from "../../components/SearchInput";
import HomeToolbar from "../../components/HomeToolbar";
import faqQuestionsService from "../../services/faqQuestionsService";
import { IQuestion } from "../../types/types";
import { genericSearch } from "../../utils/searchHelper";
import { useHistory } from "react-router";

export type TQuestionList = IQuestion[];

const Home = () => {
  const [questions, setQuestionsList] = useState<TQuestionList>([]);
  const [filteredQuestions, setFilteredQuestions] = useState<TQuestionList>([]);
  const [query, setQuery] = useState<string>("");
  const history = useHistory();

  const goToNewQuestion = () => {
    history.push("/newquestion");
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    const previousQuestions = questions;

    if (query !== "") {
      const searchedQuestions = previousQuestions.filter((previousQuestion) =>
        genericSearch(
          previousQuestion,
          ["id", "title", "answer", "color"],
          query
        )
      );

      setFilteredQuestions(searchedQuestions);
    } else {
      setFilteredQuestions(questions);
    }
  };

  useEffect(() => {
    const retrieveQuestions = async () => {
      try {
        // isLoading = true
        const { data } = await faqQuestionsService.getQuestions();
        setQuestionsList(data.results);
        setFilteredQuestions(data.results);
      } catch (error) {
        // handle error
      } finally {
        // isLoading = false
      }
    };
    retrieveQuestions();
  }, []);

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: "820px",
      }}
    >
      <HomeToolbar />
      <div style={{ display: "flex", marginBottom: "2rem" }}>
        <SearchInput query={query} onHandleSearch={handleSearch} />

        <NewQuestionButton onClick={goToNewQuestion} />
      </div>

      {filteredQuestions.length > 0 &&
        filteredQuestions.map((question, index) => (
          <FaqExpansionPanel
            key={index}
            id={question.id}
            title={question.title}
            answer={question.answer}
            color={question.color}
          />
        ))}
    </Container>
  );
};

export default Home;
