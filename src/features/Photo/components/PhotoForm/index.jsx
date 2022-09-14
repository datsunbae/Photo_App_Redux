import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup } from "reactstrap";
import PHOTO_CATEGORY_OPTIONS from "constants/global";
import { FastField, Formik, Form } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from 'yup'

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
    photo: ''
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    category: Yup.number().required('This field is required').nullable(),
    photo: Yup.string().required('This field is required')
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log("Values: ", values)}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const { values, errors, touched } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Ex: Beautiful girls"
            ></FastField>

            <FormGroup>
              <Button color="primary">
                Add to album
              </Button>
            </FormGroup>

            <FastField
              name="category"
              component={SelectField}
              label="Category"
              placeholder="What is your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            ></FastField>

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            ></FastField>

            <FormGroup>
              <Button type="submit" color="primary">
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
