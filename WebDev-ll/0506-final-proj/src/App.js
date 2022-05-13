import React, { useState, useEffect } from "react";
import "./App.css";
import { Header, Filter } from "./templates";

import AddInputCards from "./component/AddInputCards";
import EditInputCards from "./component/EditInputCards";

import List from "./component/List";
import { useDispatch } from "react-redux";

function App() {
  const [addToggle, setAddToggle] = useState("");
  const [editToggle, setEditToggle] = useState("");
  const [bgCss, setBgCss] = useState("");
  const [searchVal, setSearchVal] = useState("");

  const addHandler = () => {
    setAddToggle("add-cards");
    setBgCss("app-bg");
  };
  const dispatch = useDispatch();
  const editHandler = (id) => {
    setEditToggle("edit-cards");
    setBgCss("app-bg");
    dispatch({ type: "EDIT_INPUT", payload: id });
  };
  const deleteHandler = (id) => {
    dispatch({ type: "DELETE_INPUT", payload: id });

    alert("Deleted!");
  };

  return (
    <div className={`App ${bgCss}`}>
      <Header />
      <Filter value={searchVal} onChange={setSearchVal} />

      <AddInputCards class={addToggle} set={setAddToggle} setBg={setBgCss} />
      <EditInputCards class={editToggle} set={setEditToggle} setBg={setBgCss} />

      <List
        addHandler={addHandler}
        editHandler={editHandler}
        deleteHandler={deleteHandler}
        value={searchVal}
      />
    </div>
  );
}

export default App;
