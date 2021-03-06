import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import listReducer from "./redux/reducers/listReducer";
import { Provider } from "react-redux";
// import { configureStore } from "@reduxjs/toolkit";

const store = createStore(listReducer, composeWithDevTools());
// const store = configureStore({
//   reducer: {
//     listReducer: listReducer,
//   },
// });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
