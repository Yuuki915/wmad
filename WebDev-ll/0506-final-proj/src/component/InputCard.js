import React from "react";
import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export default function InputCard() {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#e91e63",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e91e63",
    },
  });

  return (
    <div className="input-card">
      <CssTextField
        required
        id="standard-required"
        label="Id"
        defaultValue=""
        variant="standard"
        className="input-card"
      />

      {/* 

      <CssTextField
        required
        id="standard-required"
        label="Title"
        defaultValue=""
        variant="standard"
        className="input-card"
      />

      <CssTextField
        required
        id="standard-required"
        label="State"
        defaultValue=""
        variant="standard"
        className="input-card"
      />

      <CssTextField
        required
        id="standard-required"
        label="Url"
        defaultValue=""
        variant="standard"
        className="input-card"
      />

      <CssTextField
        required
        id="standard-required"
        label="Updated at"
        defaultValue=""
        variant="standard"
        className="input-card"
      />

      <CssTextField
        required
        id="standard-required"
        label="Created at"
        defaultValue=""
        variant="standard"
        className="input-card"
      /> */}
    </div>
  );
}
