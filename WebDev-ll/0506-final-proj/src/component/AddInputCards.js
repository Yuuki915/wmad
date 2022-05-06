import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Btn from "./btns/Btn";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function AddInputCards(props) {
  const [id, setId] = useState(Number);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [release, setRelease] = useState("");
  const [newVol, setNewVol] = useState("");
  const [url, setUrl] = useState("");

  const options = {
    ids: {
      id: "standard-required",
      label: "ID",
      value: id,
      variant: "standard",
    },
    titles: {
      id: "standard-required",
      select: false,
      label: "Title",
      value: title,
      variant: "standard",
    },
    states: {
      id: "standard-select-currency",
      label: "State",
      defaultValue: status,
      variant: "standard",
    },
    releases: {
      id: "standard-required",
      required: false,
      label: "Released at",
      defaultValue: release,
      variant: "standard",
    },
    nexts: {
      required: false,
      id: "standard-required",
      label: "New vol",
      defaultValue: newVol,
      variant: "standard",
    },
    urls: {
      required: false,
      id: "standard-required",
      label: "Official URL",
      defaultValue: url,
      variant: "standard",
    },
  };

  const addInfos = useSelector((state) => state);
  const dispatch = useDispatch();

  const saveHandler = (e) => {
    // e.preventDefault();

    addInfos.filter(function (val) {
      if (val.id === id) {
        return alert("This Id is already exist");
      }
    });
    addInfos.filter(function (val) {
      if (val.title === title) {
        return alert("This title is already exist");
      }
    });

    if (!id || !title || !status) {
      return alert("Please fiil required field");
    }

    const data = {
      id: addInfos[addInfos.length - 1].id + 1,
      title,
      status,
      release,
      newVol,
      url,
    };
    dispatch({ type: "ADD_INPUT", payload: data });
    alert("Data added successfly!!");
    addInfos.push(data);

    props.set("");
    props.setBg("");
  };

  const cancelHandler = () => {
    props.set("");
    props.setBg("");
    setId("");
    setTitle("");
    setStatus("");
    setRelease("");
    setNewVol("");
    setUrl("");
  };

  return (
    <div className={`input-cards ${props.class}`}>
      <h3>Add</h3>
      <TextField
        className="input-card"
        fullWidth
        sx={{
          mb: 2,
        }}
        required
        id={options.ids.id}
        label={options.ids.label}
        variant={options.ids.variant}
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <TextField
        className="input-card"
        fullWidth
        sx={{
          mb: 2,
        }}
        required
        id={options.titles.id}
        label={options.titles.label}
        variant={options.titles.variant}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <FormControl fullWidth required>
        <InputLabel>Status</InputLabel>
        <Select
          className="input-card"
          sx={{
            mb: 2,
          }}
          label={`${options.states.label} *`}
          variant={options.states.variant}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="Released">Released</MenuItem>
          <MenuItem value="Coming soon">"Coming soon"</MenuItem>
        </Select>
      </FormControl>

      <TextField
        className="input-card"
        fullWidth
        sx={{
          mb: 2,
        }}
        id={options.releases.id}
        label={options.releases.label}
        variant={options.releases.variant}
        value={release}
        onChange={(e) => setRelease(e.target.value)}
      />

      <TextField
        className="input-card"
        fullWidth
        sx={{
          mb: 2,
        }}
        id={options.nexts.id}
        label={options.nexts.label}
        variant={options.nexts.variant}
        value={newVol}
        onChange={(e) => setNewVol(e.target.value)}
      />

      <TextField
        className="input-card"
        fullWidth
        sx={{
          mb: 2,
        }}
        id={options.urls.id}
        label={options.urls.label}
        variant={options.urls.variant}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <Stack direction="row" spacing={2}>
        <Btn btn={"Save"} btnHandler={() => saveHandler()} />
        <Btn btn={"Cancel"} btnHandler={() => cancelHandler()} />
      </Stack>
    </div>
  );
}
