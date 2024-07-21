import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "./Layout";
import * as _ from "@/pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<_.Landing />} />
          <Route path="error/:code" element={<_.Error />} />
        </Route>
        <Route path="/*" element={<Navigate to="/error/404" />} />
      </Routes>
    </BrowserRouter>
  );
};
