import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router/index.tsx";
import "@configs/tailwindcss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
