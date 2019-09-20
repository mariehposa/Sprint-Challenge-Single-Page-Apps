import React, { useState } from "react";
import { Formik, Form, Field} from 'formik';

const initialUserForm = {
  name: ''
}


const validate = (formValues) => {
  const errors = {};

  //checking if searchName is correct
  if (!formValues.name) {
      errors.name = 'Please enter a valid name!';
  } else if (formValues.name.length < 2) {
      errors.name = 'Oops! That is short!';
  }
}

//to check for letters and numbers
const validation = yup.object().shape({
  name: yup.string().required('Please enter correct name!'),
})

export default function SearchForm() {
  return (
    <section className="search-form">
     // Add a search form here
     <Formik
            validationSchema= {validation}
            initialValues={initialUserForm}
            validate= {validate}
            onSubmit={onSubmit}
            render={props => {
                return (
                    <Form>
                        <label>
                            Name
                            <Field name='name' type='text' placeholder='Search here!' />
                            <ErrorMessage name='name' component='div' />
                        </label>
                        <button type='submit'>Submit</button>
                    </Form>
                )
            }}
        />
    </section>
  );
}
