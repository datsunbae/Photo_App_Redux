import React from "react";
import Banner from "components/Banner";
import PhotoForm from "features/Photo/components/PhotoForm";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, updatePhoto } from "features/Photo/photoSlice";
import { useNavigate, useParams } from "react-router-dom";

AddEdit.propTypes = {};

function AddEdit(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const valueEditPhoto = useSelector(state => state.photos.find(photo => photo.id === Number(photoId)));
  console.log(valueEditPhoto)

  const initialValues = isAddMode ? 
  {
    title: '',
    categoryId: null,
    photo: ''
  }
  : valueEditPhoto;
  

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if(isAddMode) {
          const action = addPhoto(values);
          dispatch(action);
        }
        else{
          const action = updatePhoto(values);
          dispatch(action);
        }
        navigate("/photos");
        resolve();
      }, 2000);
    });
  };

  return (
    <div className="photo-add">
      <Banner title="Pick your amazing photo"></Banner>
      <div className="photo-add__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}>
        </PhotoForm>
      </div>
    </div>
  );
}

export default AddEdit;
