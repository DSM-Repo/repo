import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router/index.tsx";
import "font";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
