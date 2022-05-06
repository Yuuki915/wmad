import React, { useState } from "react";
import styled from "@emotion/styled";
import { MenuItem, TextField } from "@mui/material";

const states = [
  {
    key: 1,
    value: "Released",
  },
  {
    key: 2,
    value: "Comming soon",
  },
];

export default function EditInputCard() {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#e91e63",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e91e63",
    },
  });

  const [status, setStatus] = useState("status");
  const handleChange = (event) => {
    setStatus(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="input-card">
      <CssTextField
        required
        id="standard-required"
        label="id"
        defaultValue=""
        variant="standard"
        fullWidth
        className="input-card"
        sx={{
          mb: 2,
        }}
      />

      <CssTextField
        required
        fullWidth
        id="standard-required"
        label="Title"
        defaultValue=""
        variant="standard"
        className="input-card"
        sx={{
          mb: 2,
        }}
      />

      <CssTextField
        required
        fullWidth
        select
        id="standard-select-currency"
        label="Status"
        value={status}
        variant="standard"
        className="input-card"
        sx={{
          mb: 2,
        }}
        onChange={handleChange}
      >
        {states.map((option) => (
          <MenuItem key={option.key} value={option.value}>
            {option.value}
          </MenuItem>
        ))}
      </CssTextField>

      <CssTextField
        fullWidth
        id="standard-required"
        label="Released at"
        defaultValue=""
        variant="standard"
        className="input-card"
        sx={{
          mb: 2,
        }}
      />

      <CssTextField
        fullWidth
        id="standard-required"
        label="Next vol"
        defaultValue=""
        variant="standard"
        className="input-card"
        sx={{
          mb: 2,
        }}
      />

      <CssTextField
        fullWidth
        id="standard-required"
        label="Official URL"
        defaultValue=""
        variant="standard"
        className="input-card"
        sx={{
          mb: 2,
        }}
      />
    </div>
  );
}
