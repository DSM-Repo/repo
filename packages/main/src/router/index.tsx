import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import * as _ from "../Pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_.Landing />} />
        <Route path="/viewer/:id" element={<_.PublicViewer />} />
        <Route path="/resume_viewer/:id" element={<_.ResumePublicViewer />} />
        <Route path="/404" element={<_.NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};
