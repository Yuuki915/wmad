import React from "react";
import EditInputCard from "./EditInputCard";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function EditInputCards() {
  return (
    <div className="input-cards edit-cards">
      <h3>Edit</h3>

      <EditInputCard />

      <Stack direction="row" spacing={2}>
        <Button color="inherit" size="small">
          Save
        </Button>
        <Button color="inherit" size="small">
          Cancel
        </Button>
      </Stack>
    </div>
  );
}
