import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { UserDetail } from "./components/UserDetail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/userdetail" element={<UserDetail />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
