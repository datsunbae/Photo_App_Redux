import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import AddEditPage from "./pages/AddEdit";
import NotFoundPage from "../../components/NotFound";

function Photo(props) {
  return (
    <Routes>
      <Route exact path="" element={<MainPage/>} />
      <Route path="add" element={<AddEditPage/>} />
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
  );
}

Photo.propTypes = {};

export default Photo;
