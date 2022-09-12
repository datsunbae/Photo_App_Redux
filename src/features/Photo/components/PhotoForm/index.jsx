import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Button, Form, FormGroup, Label } from "reactstrap";
import Images from "constants/images";
import PHOTO_CATEGORY_OPTIONS from "constants/global";
import { FastField, Formik } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";

PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {
    const initialValues = {
        title: '',
        category: null,
        
    }
  return (
    <Formik
        initialValues={initialValues}
    >
      {(formikProps) => {
        const {values, errors, touched}  = formikProps;
        console.log({values, errors, touched})
        return (
          <Form>
            <FastField
                name='title'
                component={InputField}

                label='Title'
                placeholder='Ex: Beautiful girls'
            > 
            </FastField>

            <FastField
                name='category'
                component={SelectField}

                label='Category'
                placeholder='What is your photo category?'
                options={PHOTO_CATEGORY_OPTIONS}
            > 
            </FastField>

            <FastField
                name='photo'
                component={RandomPhotoField}
                label='Photo'
            > 
            </FastField>
            <FormGroup>
              <Button color="primary">Add to album</Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
