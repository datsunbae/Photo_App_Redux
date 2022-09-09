import React from 'react';
import Banner from '../../../../components/Banner';
import PhotoForm from '../../components/PhotoForm';
import './style.scss';

AddEdit.propTypes = {}

function AddEdit(props) {
  return (
    <div className='photo-add'>
      <Banner title='Pick your amazing photo'></Banner>
      <div className='photo-add__form'>  
        <PhotoForm></PhotoForm>
      </div>
    </div>
  )
}

export default AddEdit
