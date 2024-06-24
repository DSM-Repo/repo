import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import * as _ from "../pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<_.Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
