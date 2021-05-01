import React from "react";
import { useHistory } from "react-router";
import {
  IconButton,
  Toolbar,
  Typography,
  Container,
  makeStyles,
} from "@material-ui/core";
import Question from "../../components/Question/index";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { ADD_QUESTION_LABEL } from "../../utils/constants";

const NewQuestion = () => {
  const classes = useStyles();
  const history = useHistory();

  const goToHome = () => {
    history.push("/");
  };

  return (
    <Container maxWidth={false} sx={{ maxWidth: "720px" }}>
      <Toolbar className={classes.newQuestionToolbar}>
        <IconButton
          edge="start"
          className={"classes.backButton"}
          color="inherit"
          aria-label="back"
          onClick={goToHome}
        >
          <ArrowBackIosIcon className={classes.toolbarIcon} />
        </IconButton>
        <Typography className={classes.toolbarTitle}>
          {ADD_QUESTION_LABEL}
        </Typography>
      </Toolbar>

      <Question />
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  newQuestionToolbar: {
    minHeight: "100px",
    backgroundColor: "#10159a",
    borderRadius: "5px",
    marginBottom: "1.5rem",
    marginTop: "3rem",
  },
  toolbarIcon: {
    color: "#8789cc",
    fontSize: "1.8rem",
  },
  toolbarTitle: {
    fontFamily: "Nunito-Bold",
    fontSize: "1.5rem",
    color: "#fff",
  },
}));

export default NewQuestion;
