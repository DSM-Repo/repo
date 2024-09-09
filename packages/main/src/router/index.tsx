import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "@configs/util";
import * as _ from "../Pages";
import { useEffect } from "react";

export const Router = () => {
  const { getRole } = useAuth();
  useEffect(() => {
    const role = getRole();
    if (role === "student") {
      window.location.replace(process.env.VITE_APP_URL_STUDENT as string);
    } else if (role === "teacher") {
      window.location.replace(process.env.VITE_APP_URL_TEACHER as string);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_.Landing />} />
        <Route path="/404" element={<_.NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </BrowserRouter>
  );
};
