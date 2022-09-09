import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import PHOTO_CATEGORY_OPTIONS from '../../../../constants/global';
import Images from '../../../../constants/images';

PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {
  return (
    <Form>
        <FormGroup>
            <Label for='title'>Title</Label>
            <Input name='title' id='title' placeholder='Ex: Beautiful girls ^^'></Input>
        </FormGroup>

        <FormGroup>
            <Label for='category'>Category</Label>
            <Select id='category' name='category' placeholder='What is your photo category?' options={PHOTO_CATEGORY_OPTIONS}/>
        </FormGroup>

        <FormGroup>
            <Label for='photo'>Photo</Label>
            <div>
                <Button color='primary'>Random a photo</Button>
            </div>
            <div>
                <img width='200px' height='200px' src={Images.ORANGE} alt='colorful'/>
            </div>
        </FormGroup>

        <FormGroup>
            <Button color='primary'>Add to album</Button>
        </FormGroup>
    </Form>
  )
}

export default PhotoForm
