import React, { useState } from "react";
import AddInputCard from "./AddInputCard";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import Btn from "./btns/Btn";
import { useSelector } from "react-redux";

export default function AddInputCards(props) {
  const [id, setId] = useState(1);
  const [title, setTitle] = useState("");
  const [state, setState] = useState("state");
  const [release, setRelease] = useState("");
  const [newVol, setNewVol] = useState("");
  const [url, setUrl] = useState("");

  const [required, setRequired] = useState("");

  const options = {
    ids: {
      required: "required",
      id: "standard-required",
      label: "ID",
      defaultValue: id,
      variant: "standard",
    },
    titles: {
      required: "required",
      id: "standard-required",
      label: "Title",
      defaultValue: title,
      variant: "standard",
    },
    states: {
      required: "required",
      id: "standard-select-currency",
      select: "select",
      label: "State",
      defaultValue: state,
      variant: "standard",
    },
    releases: {
      id: "standard-required",
      label: "Released at",
      defaultValue: release,
      variant: "standard",
    },
    nexts: {
      id: "standard-required",
      label: "New vol",
      defaultValue: newVol,
      variant: "standard",
    },
    urls: {
      id: "standard-required",
      label: "Official URL",
      defaultValue: url,
      variant: "standard",
    },
  };

  const addInfos = useSelector((state) => state);
  console.log(addInfos);

  const handleSubmit = (e) => {
    // e.preventDefault();

    const checkId = addInfos.find((addInfo) => addInfo.id === id && id);
    if (checkId) {
      return alert("This Id is already exist");
    }

    // console.log(e);
  };

  const cancelHandler = () => {
    props.set("");
    props.setBg("");
  };

  return (
    <div className={`input-cards ${props.class}`}>
      <h3>Add</h3>

      <AddInputCard
        req={options.ids.required}
        id={options.ids.id}
        label={options.ids.label}
        defaultValue={options.ids.defaultValue}
        variant={options.ids.variant}
        onChange={(e) => setId(e.target.value)}
      />
      <AddInputCard
        req={options.titles.required}
        id={options.titles.id}
        label={options.titles.label}
        defaultValue={options.titles.defaultValue}
        variant={options.titles.variant}
        onChange={(e) => setTitle(e.target.value)}
      />
      <AddInputCard
        req={options.states.required}
        id={options.states.id}
        select={options.states.select}
        label={options.states.label}
        defaultValue={options.states.defaultValue}
        variant={options.states.variant}
        onChange={(e) => setState(e.target.value)}
      />
      <AddInputCard
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
      />

      <Stack direction="row" spacing={2}>
        <Btn btn={"Save"} btnHandler={() => handleSubmit()} />
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
