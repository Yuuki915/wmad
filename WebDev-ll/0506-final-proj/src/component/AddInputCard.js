import React from "react";
import styled from "@emotion/styled";
import { Select, MenuItem, TextField } from "@mui/material";
// import { useSelector } from "react-redux";

const statuses = [
  {
    key: 1,
    value: "Released",
  },
  {
    key: 2,
    value: "Comming soon",
  },
];

export default function AddInputCard(props) {
  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#e91e63",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#e91e63",
    },
  });

  // const [value, setValue] = useState();

  return (
    <div className="add-card">
      <CssTextField
        required={props.req}
        select={props.select}
        id={props.id}
        label={props.label}
        value={props.value}
        onChange={(e) => console.log(props.onChange)}
        variant={props.variant}
        fullWidth
        sx={{
          mb: 2,
        }}
        className="input-card"
      >
        {/* {select
          ? statuses.map((option) => (
              <MenuItem key={option.key} value={option.value}>
                {console.log(option.value)}
              </MenuItem>
            ))
          : false} */}
        {statuses.map((option) => (
          <Select
            key={option.key}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={option.value}
            label={props.label}
            onChange={props.onChange}
          >
            <MenuItem value={option.value}>{option.value}</MenuItem>
          </Select>
        ))}
      </CssTextField>

      {/* 
      <CssTextField
        required
        fullWidth
        id="standard-required"
        label="Title"
        defaultValue={title}
        variant="standard"
        onChange={(e) => setTitle(e.target.value)}
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
        label="State"
        value={state}
        variant="standard"
        onChange={(e) => setState(e.target.value)}
        className="input-card"
        sx={{
          mb: 2,
        }}
        // onChange={handleChange}
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
        defaultValue={release}
        variant="standard"
        onChange={(e) => setRelease(e.target.value)}
        className="input-card"
        sx={{
          mb: 2,
        }}
      />

      <CssTextField
        fullWidth
        id="standard-required"
        label="Next vol"
        defaultValue={newVol}
        variant="standard"
        onChange={(e) => setNewVol(e.target.value)}
        className="input-card"
        sx={{
          mb: 2,
        }}
      />

      <CssTextField
        fullWidth
        id="standard-required"
        label="Official URL"
        defaultValue={url}
        variant="standard"
        onChange={(e) => setUrl(e.target.value)}
        className="input-card"
        sx={{
          mb: 2,
        }}
      /> */}
    </div>
  );
}
