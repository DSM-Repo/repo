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
          <Route path="write/:id" element={<_.Write />} />
          <Route path="library" element={<_.Library />} />
          <Route path="detail" element={<_.Detail />} />
          <Route path="book/:id" element={<_.Book />} />
        </Route>
        <Route path="/*" element={<RedirectDiff />} />
      </Routes>
    </BrowserRouter>
  );
};
