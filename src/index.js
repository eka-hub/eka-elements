import React from "react";
import ReactDOM from "react-dom";
import Example from "./example";
import Icons from "./example/Icons";

import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/icons" element={<Icons />} />
        <Route path="*" element={<Example />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
