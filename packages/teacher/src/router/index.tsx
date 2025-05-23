import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RedirectDiff, auth } from "@configs/util";
import { Layout } from "./Layout";
import * as _ from "@/page";

export const Router = () => {
  if (auth.getRole() !== "teacher") {
    return <RedirectDiff />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<_.Home />} />
          <Route path="resume/:id" element={<_.Resume />} />
          <Route path="library" element={<_.Library />} />
          <Route path="book/:id" element={<_.Book />} />
          <Route path="major" element={<_.Major />} />
          <Route path="history" element={<_.History />} />
          <Route path="notice" element={<_.Notice />} />
        </Route>
        <Route path="render/:grade" element={<_.Render />} />
        <Route path="*" element={<RedirectDiff />} />
      </Routes>
    </BrowserRouter>
  );
};
