import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from 'components/Banner';
import Images from 'constants/images';
import './Main.scss';
import { useSelector } from 'react-redux';
import { photoReducer } from 'app/store';


function Main(props) {
  const listPhoto = useSelector(state => state.photos);
  return (
    <div className='photo-main'>
      <Banner
      title='Your awesome photos 🌺'
      backgroundUrl={Images.COLORFUL}
    ></Banner>

      <Container className='text-center'>
        <Link to='/photos/add' className='text-decoration-none photo-main__add-photo'>Add new photo</Link>
      </Container>
    </div>
  )
}

Main.propTypes = {}

export default Main
