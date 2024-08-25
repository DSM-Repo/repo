import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RedirectDiff } from "@configs/util";
import { Layout } from "./Layout";
import * as _ from "@/pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<_.Home />} />
          <Route path="write/:section" element={<_.Write />} />
          <Route path="library" element={<_.Library />} />
        </Route>
        <Route path="/login" element={<_.Login />} />
        <Route path="/*" element={<RedirectDiff />} />
      </Routes>
    </BrowserRouter>
  );
};
