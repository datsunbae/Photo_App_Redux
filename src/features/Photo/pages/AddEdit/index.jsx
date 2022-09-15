import React from "react";
import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import "./style.scss";
import { useDispatch } from "react-redux";
import { addPhoto } from "features/Photo/photoSlice";
import { useNavigate } from "react-router-dom";

AddEdit.propTypes = {};

function AddEdit(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const action = addPhoto(values);
        dispatch(action);
        navigate("/photos");
        resolve();
      }, 2000);
    });
  };
  return (
    <div className="photo-add">
      <Banner title="Pick your amazing photo"></Banner>
      <div className="photo-add__form">
        <PhotoForm onSubmit={handleSubmit}></PhotoForm>
      </div>
    </div>
  );
}

export default AddEdit;
