import { Router } from "./router/index.tsx";
import ReactDOM from "react-dom/client";
import "@configs/tailwindcss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Router />
  </>
);
