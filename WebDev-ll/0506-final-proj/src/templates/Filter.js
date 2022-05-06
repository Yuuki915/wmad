// import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Filter(props) {
  return (
    <div className="filter">
      <TextField
        fullWidth
        id="standard-basic"
        label="Search"
        variant="standard"
        type="text"
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      >
        {/* {listInfo.map((val, key) => (
          <div key={key}>{console.log(val.id)}</div>
        ))} */}
      </TextField>
    </div>
  );
}
