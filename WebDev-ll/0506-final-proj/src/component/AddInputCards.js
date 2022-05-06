import React, { useState } from "react";
import AddInputCard from "./AddInputCard";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import Btn from "./btns/Btn";
import { useSelector } from "react-redux";
import { TextField } from "@mui/material";

export default function AddInputCards(props) {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  // const [status, setStatus] = useState("status");
  // const [release, setRelease] = useState("");
  // const [newVol, setNewVol] = useState("");
  // const [url, setUrl] = useState("");
  // const [value, setValue] = useState("");
  // const [required, setRequired] = useState("");

  const options = {
    ids: {
      required: true,
      id: "standard-required",
      label: "ID",
      value: id,
      variant: "standard",
    },
    titles: {
      required: true,
      id: "standard-required",
      select: false,
      label: "Title",
      value: title,
      variant: "standard",
    },
    // states: {
    //   required: true,
    //   id: "standard-select-currency",
    //   select: true,
    //   label: "State",
    //   defaultValue: status,
    //   variant: "standard",
    // },
    // releases: {
    //   id: "standard-required",
    //   required: false,
    //   label: "Released at",
    //   defaultValue: release,
    //   variant: "standard",
    // },
    // nexts: {
    //   required: false,
    //   id: "standard-required",
    //   label: "New vol",
    //   defaultValue: newVol,
    //   variant: "standard",
    // },
    // urls: {
    //   required: false,
    //   id: "standard-required",
    //   label: "Official URL",
    //   defaultValue: url,
    //   variant: "standard",
    // },
  };

  const addInfos = useSelector((state) => state);
  const saveHandler = (e) => {
    // e.preventDefault();

    console.log(id, title);

    // const checkId = addInfos.find((addInfo) => addInfo.id === id && id);
    // const checkTitle = addInfos.find(
    //   (addInfo) => addInfo.title === parseInt(title)
    // );
    // if (checkId) {
    //   return alert("This Id is already exist");
    // }
    // if (checkTitle) {
    //   return alert("This Title is already exist");
    // }
  };

  const cancelHandler = () => {
    props.set("");
    props.setBg("");
  };

  return (
    <div className={`input-cards ${props.class}`}>
      <h3>Add</h3>

      <TextField
        required
        id="standard-required"
        label="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        variant="standard"
        fullWidth
        sx={{
          mb: 2,
        }}
        className="input-card"
      />
      <AddInputCard
        req={options.ids.required}
        id={options.ids.id}
        label={options.ids.label}
        variant={options.ids.variant}
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <AddInputCard
        req={options.titles.required}
        id={options.titles.id}
        label={options.titles.label}
        variant={options.titles.variant}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <AddInputCard
        req={options.states.required}
        id={options.states.id}
        select={options.states.select}
        label={options.states.label}
        defaultValue={options.states.defaultValue}
        variant={options.states.variant}
        onChange={(e) => setStatus(e.target.value)}
      /> */}
      {/* <AddInputCard
        id={options.releases.id}
        label={options.releases.label}
        defaultValue={options.releases.defaultValue}
        variant={options.releases.variant}
        onChange={(e) => setRelease(e.target.value)}
      />
      <AddInputCard
        id={options.nexts.id}
        label={options.nexts.label}
        defaultValue={options.nexts.defaultValue}
        variant={options.nexts.variant}
        onChange={(e) => setNewVol(e.target.value)}
      />
      <AddInputCard
        id={options.urls.id}
        label={options.urls.label}
        defaultValue={options.urls.defaultValue}
        variant={options.urls.variant}
        onChange={(e) => setUrl(e.target.value)}
      /> */}

      <Stack direction="row" spacing={2}>
        <Btn btn={"Save"} btnHandler={() => saveHandler()} />
        <Btn btn={"Cancel"} btnHandler={() => cancelHandler()} />
        {/* <Button
          // disabled
          color="inherit"
          size="small"
          type="submit"
          onClick={() => handleSubmit()}
        >
          Save
        </Button>

        <Button color="inherit" size="small" onClick={() => cancelHandler()}>
          Cancel
        </Button> */}
      </Stack>
    </div>
  );
}
