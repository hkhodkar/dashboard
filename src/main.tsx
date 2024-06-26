import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@hatef_khodkar/storybook/dist/index.cjs.css";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
