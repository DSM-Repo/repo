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
          <Route path="library" element={<_.Library />} />
          <Route path="major" element={<_.Major />} />
          <Route path="history" element={<_.History />} />
        </Route>
        <Route path="/login" element={<_.Login />} />
        <Route path="*" element={<RedirectDiff />} />
      </Routes>
    </BrowserRouter>
  );
};
