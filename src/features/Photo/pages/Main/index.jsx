import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from 'components/Banner';
import Images from 'constants/images';
import './Main.scss';
import { useDispatch, useSelector } from 'react-redux';
import PhotoList from 'features/Photo/components/PhotoList';
import { removePhoto } from 'features/Photo/photoSlice';


function Main(props) {
  const listPhoto = useSelector(state => state.photos);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditPhoto = (photo) => {
    const editPhotoURL = `/photos/${photo.id}`;
    navigate(editPhotoURL);
  }

  const handleRemovePhoto = (photo) => {
    const idPhotoRemove = photo.id;
    const action = removePhoto(idPhotoRemove);
    dispatch(action);
  }
  return (
    <div className='photo-main'>
      <Banner
      title='Your awesome photos 🌺'
      backgroundUrl={Images.COLORFUL}
    ></Banner>

      <Container className='text-center'>
        <Link to='/photos/add' className='text-decoration-none photo-main__add-photo'>Add new photo</Link>
        <PhotoList
          photoList={listPhoto}
          onPhotoEditClick={handleEditPhoto}
          onPhotoRemoveClick={handleRemovePhoto}
        />
      </Container>
    </div>
  )
}

Main.propTypes = {}

export default Main
