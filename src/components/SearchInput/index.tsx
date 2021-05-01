import React from "react";
import {
  Divider,
  IconButton,
  InputBase,
  makeStyles,
  Paper,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { QUESTION_LIST_SEARCH_INPUT_LABEL } from "../../utils/constants";

type ISearch = {
  query: string;
  onHandleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput = ({ query, onHandleSearch }: ISearch) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root} sx={{ p: "2px 4px" }} component="form">
      <IconButton disableRipple sx={{ p: "10px" }} aria-label="search">
        <SearchIcon />
      </IconButton>

      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

      <InputBase
        className={classes.input}
        sx={{ ml: 1 }}
        onChange={onHandleSearch}
        value={query}
        placeholder={QUESTION_LIST_SEARCH_INPUT_LABEL}
        inputProps={{ "aria-label": "procure aqui" }}
      />
    </Paper>
  );
};

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    alignItems: "center",
    flex: 2,
    marginRight: "1rem",
    "& .MuiSvgIcon-root": {
      fontSize: "2rem",
    },
  },
  input: {
    fontFamily: "Nunito-Bold",
    fontSize: "1.1rem",
    flex: 1,
  },
}));

export default SearchInput;
