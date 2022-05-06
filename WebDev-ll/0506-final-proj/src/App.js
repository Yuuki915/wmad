import React, { useState } from "react";
import "./App.css";
import { Header, Filter } from "./templates";

import AddInputCards from "./component/AddInputCards";
import { useDispatch, useSelector } from "react-redux";
import EditInputCards from "./component/EditInputCards";

import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import AddIcon from "@mui/icons-material/Add";

function App() {
  const itemInfo = useSelector((state) => state);

  const [addToggle, setAddToggle] = useState("");
  const [editToggle, setEditToggle] = useState("");
  const [bgCss, setBgCss] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const addHandler = () => {
    setAddToggle("add-cards");
    setBgCss("app-bg");
  };
  const editHandler = (id) => {
    setEditToggle("edit-cards");
    setBgCss("app-bg");
    dispatch({ type: "EDIT_INPUT", payload: id });
  };
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch({ type: "DELETE_INPUT", payload: id });

    alert("Deleted!");
  };

  const listTitles = [
    "ID",
    "Title",
    "Vol",
    "Status",
    "Released at",
    "New volume",
    <AddIcon onClick={() => addHandler()} />,
  ];
  const listInfo = useSelector((state) => state);

  return (
    <div className={`App ${bgCss}`}>
      <Header />
      <Filter value={searchVal} onChange={setSearchVal} />

      <AddInputCards class={addToggle} set={setAddToggle} setBg={setBgCss} />
      <EditInputCards class={editToggle} set={setEditToggle} setBg={setBgCss} />

      <div>
        <table className="list-table">
          <thead>
            <tr>
              {listTitles.map((listTitle, key) => (
                <th key={key}>{listTitle}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {listInfo
              .filter((val) => {
                if (searchVal === "") {
                  return val;
                } else if (
                  val.title.toLowerCase().includes(searchVal.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((val, key) => (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.vol}</td>
                  <td>{val.status}</td>
                  <td>{val.release}</td>
                  <td>{val.newVol}</td>
                  <td>
                    <EditIcon onClick={() => editHandler()}></EditIcon>
                  </td>
                  <td>
                    <DeleteForeverIcon onClick={() => deleteHandler(val.id)} />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
