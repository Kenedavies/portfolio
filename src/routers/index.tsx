import React from "react";
import { Route, Routes } from "react-router-dom";
import PagesLayout from "../components/PagesLayout";
import Home from "../layouts/Home";
import MyWork from "../layouts/MyWork";
import MyWorkId from "../layouts/MyWork/MyWorkId";

export default function AppRouters() {
  return (
    <Routes>
      <Route path="/" element={<PagesLayout />}>
        <Route path="" element={<Home />} />
        <Route path="my-work" element={<MyWork />} />
        <Route path="my-work/:myworkId" element={<MyWorkId />} />
      </Route>
    </Routes>
  );
}
