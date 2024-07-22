import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import * as _ from "@/pages";

export const Router = () => {
  const RedirectDiff = () => {
    window.location.replace(`${import.meta.env.VITE_APP_URL_MAIN}/error/404`);
    return null;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<_.Home />} />
          <Route path="write/:section" element={<_.Write />} />
          <Route path="library" element={<_.Library />} />
          <Route path="book/:id" element={<></>} />
        </Route>
        <Route path="/*" element={<RedirectDiff />} />
      </Routes>
    </BrowserRouter>
  );
};
