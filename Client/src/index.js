import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
// import ReactDOM from "react-dom";
import App from "./App";
import store from "./store/ReduxStore";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </Provider>

  // <Provider store={store}>
  //   <App />
  // </Provider>
  // document.getElementById("root")
);
