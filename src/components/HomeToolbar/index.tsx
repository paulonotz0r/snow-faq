import React from "react";
import { Divider, makeStyles, Toolbar, Typography } from "@material-ui/core";
import logo from "../../assets/images/logo.png";
import { QUESTION_LIST_TOOLBAR_LABEL } from "../../utils/constants";

const HomeToolbar = () => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.faqHomeToolbar}>
      <Typography className={classes.toolbarTitle}>
        {QUESTION_LIST_TOOLBAR_LABEL}
      </Typography>

      <Divider
        sx={{
          flex: 1,
          m: 4,
          height: 70,
          borderColor: "#3c41ad",
          borderRightWidth: 3,
        }}
        orientation="vertical"
      />

      <img src={logo} alt="Snowman Labs Logo" className={classes.toolbarLogo} />
    </Toolbar>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  faqHomeToolbar: {
    minHeight: "100px",
    backgroundColor: "#10159a",
    borderRadius: "5px",
    marginBottom: "1.5rem",
    marginTop: "3rem",
  },
  toolbarTitle: {
    fontFamily: "Nunito-Bold",
    fontSize: "1.5rem",
    color: "#fff",
  },
  toolbarLogo: {
    maxWidth: "120px",
    marginRight: "10px",
    flex: 1,
  },
}));

export default HomeToolbar;
