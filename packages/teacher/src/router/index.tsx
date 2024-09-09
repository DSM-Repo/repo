import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RedirectDiff } from "@configs/util";
import { Layout } from "./Layout";
import * as _ from "@/page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<_.Home />} />
          <Route path="resume/:id" element={<_.Resume />} />
          <Route path="library" element={<_.Library />} />
          <Route path="book/:id" element={<_.Book />} />
          <Route path="major" element={<_.Major />} />
          <Route path="history" element={<></>} />
        </Route>
        <Route path="*" element={<RedirectDiff />} />
      </Routes>
    </BrowserRouter>
  );
};
