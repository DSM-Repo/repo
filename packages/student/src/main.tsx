import ReactDOM from "react-dom/client";
import { Common } from "@configs/util";
import { Router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Common>
    <Router />
  </Common>
);
