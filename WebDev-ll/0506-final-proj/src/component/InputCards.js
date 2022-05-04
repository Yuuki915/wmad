import React from "react";
import InputCard from "./InputCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import { makeStyles } from "@mui/material";

export default function InputCards() {
  return (
    <div className="input-cards">
      <h2>Add</h2>

      <InputCard />

      <Stack direction="row" spacing={2}>
        <Button disabled size="small">
          Save
        </Button>
        <Button color="inherit" size="small">
          Cancel
        </Button>

        {/* <Button variant="contained">Save</Button>
        <Button variant="contained" sx={"background-color:white; color:black"}>
          Cancel
        </Button> */}
      </Stack>
    </div>
  );
}
