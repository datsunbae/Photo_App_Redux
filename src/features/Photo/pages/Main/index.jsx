import React from 'react'
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';
import Banner from '../../../../components/Banner'
import Images from '../../../../constants/images.js';
import './Main.scss';


function Main(props) {
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
