import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ViewLayout } from "./Layout";
import * as _ from "@/pages";
import { Home } from "@/new_pages";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<_.Landing />} />
        <Route path="/render/">
          <Route path="all/:year/:grade" element={<_.Book />} />
          <Route path="specific/:id" element={<_.Specific />} />
        </Route>
        <Route path="/viewer/" element={<ViewLayout />}>
          <Route path="teacher/:id" element={<_.TeacherView />} />
          <Route path="library/:id" element={<_.LibraryView />} />
        </Route>
        <Route path="error/:code" element={<_.Error />} />
        <Route path="newHome" element={<Home />} />
        <Route path="/*" element={<Navigate to="/error/404" />} />
      </Routes>
    </BrowserRouter>
  );
};
