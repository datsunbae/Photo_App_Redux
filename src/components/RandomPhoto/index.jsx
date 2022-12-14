import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import './RandomPhoto.scss';

RandomPhoto.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  onImageUrlChange: PropTypes.func,
  onRandomButtonBlur: PropTypes.func,
};

RandomPhoto.defaultProps = {
  name: "",
  imageUrl: "",
  onImageUrlChange: null,
  onRandomButtonBlur: null,
};

const getRandomImageUrl = () => {
  const randomId = Math.floor(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

function RandomPhoto(props) {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur } = props;
  const handleRandomPhotoClick =  () => {
    const randomImageUrl = getRandomImageUrl();
    onImageUrlChange(randomImageUrl);
  };
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          name={name}
          onClick={handleRandomPhotoClick}
          onBlur={onRandomButtonBlur}
          color="primary"
        >
          Random a photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img 
            src={imageUrl} 
            alt="Ooops ... not found. Please click again"
            //Automatically get images when there is an error
            onError={e => e.target.src = handleRandomPhotoClick()}
          />
        )}
      </div>
    </div>
  );
}

export default RandomPhoto;
