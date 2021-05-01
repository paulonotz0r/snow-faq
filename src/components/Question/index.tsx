import React, { ChangeEvent, useState } from "react";
import {
  Button,
  CircularProgress,
  createStyles,
  FormLabel,
  makeStyles,
  Paper,
  Radio,
  TextField,
  Theme,
} from "@material-ui/core";
import { CheckCircle, Brightness1 } from "@material-ui/icons";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";
import faqQuestionsService from "../../services/faqQuestionsService";
import { QUESTIONS_COLORS } from "../../config.json";
import { TNewQuestion } from "../../types/types";
import newQuestionSchema from "../../utils/questionValidator";
import {
  ADD_QUESTION_ADD_BUTTON_LABEL,
  ADD_QUESTION_ANSWER_LABEL,
  ADD_QUESTION_COLOR_LABEL,
  ADD_QUESTION_ERROR_MESSAGE,
  ADD_QUESTION_SUCCESS_MESSAGE,
  ADD_QUESTION_TITLE_LABEL,
} from "../../utils/constants";

const Question = () => {
  const classes = useStyles();
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState<boolean>(false);
  const [question, setQuestion] = useState<TNewQuestion>({
    title: "",
    answer: "",
    color: "",
  });

  const isQuestionDataValid = () => {
    return newQuestionSchema.isValidSync(question);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion({ ...question, [event.target.name]: event.target.value });
  };

  const createQuestion = async () => {
    setLoading(true);
    try {
      const { data } = await faqQuestionsService.sendQuestion(question);
      console.log("DATA", data);
      enqueueSnackbar(ADD_QUESTION_SUCCESS_MESSAGE, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
      setTimeout(() => {
        history.push("/");
      }, 1000);
    } catch (error) {
      enqueueSnackbar(ADD_QUESTION_ERROR_MESSAGE, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "right",
        },
      });
    } finally {
      setLoading(false);
    }
  };

  const controlProps = (item: string) => ({
    checked: question.color === item,
    onChange: handleChange,
    value: item,
    name: "color",
    inputProps: { "aria-label": item },
    checkedIcon: <CheckCircle style={{ fontSize: 40 }} />,
    icon: <Brightness1 style={{ fontSize: 40 }} />,
  });

  const ColorRadio = ({ color }: any) => {
    return (
      <Radio
        {...controlProps(color)}
        sx={{
          color,
          "&.Mui-checked": {
            color,
          },
        }}
      />
    );
  };

  return (
    <div className={classes.rootDiv}>
      <Paper component="form" elevation={2} className={classes.paperForm}>
        <TextField
          fullWidth
          id="question-title"
          name="title"
          label={ADD_QUESTION_TITLE_LABEL}
          variant="outlined"
          onChange={handleChange}
          className={classes.questionTitle}
        />
        <TextField
          fullWidth
          multiline
          rows={2}
          id="question-answer"
          name="answer"
          label={ADD_QUESTION_ANSWER_LABEL}
          variant="outlined"
          onChange={handleChange}
          className={classes.questionAnswer}
        />

        <FormLabel className={classes.colorTitle} component="legend">
          {ADD_QUESTION_COLOR_LABEL}
        </FormLabel>
        <div className={classes.colorRadio}>
          {QUESTIONS_COLORS.map((color, index) => (
            <ColorRadio key={index} color={color} />
          ))}
        </div>
      </Paper>
      <div className={classes.addButton}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.buttonSuccess}
          disabled={loading || !isQuestionDataValid()}
          onClick={createQuestion}
        >
          <span
            style={
              !loading ? { visibility: "visible" } : { visibility: "hidden" }
            }
          >
            {ADD_QUESTION_ADD_BUTTON_LABEL}
          </span>
          {loading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </Button>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
    },
    rootDiv: {
      maxWidth: "720px",
    },
    paperForm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "3rem 2rem 2rem 2rem",
    },
    questionTitle: {
      marginBottom: "1rem",
      "& .MuiInputLabel-root": {
        fontFamily: "Nunito-Bold",
        color: "#acadb6",
      },
      "& .MuiOutlinedInput-root": {
        fontFamily: "Rubik-Light",
        fontSize: "14px",
        color: "#16173a",
      },
      "& .MuiOutlinedInput-notchedOutline > legend": {
        fontSize: "0.9em",
      },
    },
    questionAnswer: {
      marginBottom: "1rem",
      "& .MuiInputLabel-root": {
        fontFamily: "Nunito-Bold",
        color: "#acadb6",
      },
      "& .MuiOutlinedInput-root": {
        fontFamily: "Rubik-Light",
        fontSize: "14px",
        color: "#16173a",
      },
      "& .MuiOutlinedInput-notchedOutline > legend": {
        fontSize: "0.9em",
      },
    },
    colorTitle: {
      alignSelf: "flex-start",
      fontFamily: "Nunito-Bold",
      fontSize: "14px",
      color: "#acadb6",
    },
    colorRadio: {
      alignSelf: "flex-start",
    },
    addButton: {
      marginTop: "1.5rem",
    },
    buttonSuccess: {
      color: "#10159a",
      fontSize: "16px",
      fontFamily: "Nunito-Bold",
      textTransform: "none",
      height: "50px",
      backgroundColor: "#ffbe00",
      "&:hover": {
        backgroundColor: "#ffbe00",
      },
      "&:disabled": {
        backgroundColor: "#ffbe00",
      },
    },
    buttonProgress: {
      color: "#10159a",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  })
);

export default Question;
