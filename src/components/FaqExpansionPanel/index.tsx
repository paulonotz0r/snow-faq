import React from "react";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IQuestion } from "../../types/types";
import { makeStyles } from "@material-ui/core";
import "./style.css";

const FaqExpansionPanel = ({ id, title, answer, color }: IQuestion) => {
  const classes = useStyles();

  return (
    <div className="container">
      <Accordion
        sx={{ borderLeftColor: color }}
        className={classes.panelAccordion}
      >
        <AccordionSummary
          className={classes.panelQuestionTitle}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel-content"
          id={id}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.panelQuestionAnswer}>
          <Typography>{answer}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  panelAccordion: {
    borderLeftWidth: 4,
    borderLeftStyle: "solid",
    marginBottom: "0.5rem",
    "& .MuiCollapse-root": {
      marginBottom: "0.5rem",
    },
    "& .MuiSvgIcon-root": {
      fontSize: "2.5rem",
    },
  },
  panelQuestionTitle: {
    minHeight: "4rem",
    "& .MuiTypography-root": {
      fontFamily: "Nunito-Bold",
      color: "#111236",
      fontSize: "1.1rem",
    },
  },
  panelQuestionAnswer: {
    textAlign: "left",
    "& .MuiTypography-root": {
      fontFamily: "Rubik-Light",
      color: "#787987",
      fontSize: "0.97rem",
    },
  },
}));

export default FaqExpansionPanel;
