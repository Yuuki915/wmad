import { Button } from "@mui/material";
import React from "react";

export default function Btn(props) {
  return (
    <Button
      // disabled
      color="inherit"
      size="small"
      type={props.btnType}
      onClick={props.btnHandler}
    >
      {props.btn}
    </Button>
  );
}
