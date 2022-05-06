import React, { useState } from "react";
import "./App.css";
import { Header, Filter } from "./templates";

import AddInputCards from "./component/AddInputCards";
// import EditInputCards from "./component/EditInputCards";

function App() {
  const [cssToggle, setCssToggle] = useState("");
  const [bgCss, setBgCss] = useState("");

  const popupHandler = () => {
    setCssToggle("add-cards");
    setBgCss("app-bg");
  };
  return (
    <div className={`App ${bgCss}`}>
      <Header />
      <Filter />
      <div onClick={() => popupHandler()}>heyyyy</div>
      {/* <Lists /> */}

      <AddInputCards class={cssToggle} set={setCssToggle} setBg={setBgCss} />
      {/* <EditInputCards /> */}
    </div>
  );
}

export default App;
