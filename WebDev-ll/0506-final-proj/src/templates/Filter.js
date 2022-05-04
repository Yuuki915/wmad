import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";

export default function Filter() {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#e91e63",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e91e63",
    },
  });
  return (
    <div className="filter">
      <CssTextField
        fullWidth
        id="standard-basic"
        label="Search"
        variant="standard"
      />
    </div>
  );
}
