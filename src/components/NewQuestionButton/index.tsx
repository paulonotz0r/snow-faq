import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { QUESTION_LIST_NEW_QUESTION_BUTTON_LABEL } from "../../utils/constants";

type IButton = {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const NewQuestionButton = ({ onClick }: IButton) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.root}
      endIcon={<AddIcon sx={{ fontSize: 30 }} />}
      onClick={onClick}
    >
      {QUESTION_LIST_NEW_QUESTION_BUTTON_LABEL}
    </Button>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    fontFamily: "Nunito-Bold",
    backgroundColor: "#ffbe00",
    textTransform: "none",
    height: 56,
    fontSize: "1.2rem",
    color: "#10159a",
    "&:hover": {
      color: "#fff",
    },
    "& .MuiButton-endIcon > :nth-of-type(1)": {
      fontSize: "2rem",
    },
  },
}));

export default NewQuestionButton;
