import React from "react";
import PropTypes from "prop-types";
import { Button, FormGroup, Spinner } from "reactstrap";
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
  const { initialValues, onSubmit, isAddMode } = props;
  console.log(initialValues);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    categoryId: Yup.number().required('This field is required').nullable(),
    photo: Yup.string().required('This field is required')
  })

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(formikProps) => {
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Ex: Beautiful girls"
            ></FastField>
            
            <FastField
              name="categoryId"
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
              <Button type="submit" color={isAddMode ? 'primary' : 'success'}>
                {isSubmitting && <Spinner size='sm' />}
                {isAddMode ? 'Add to album' : 'Update your photo'}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
