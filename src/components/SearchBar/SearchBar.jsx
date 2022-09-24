import React from "react";
import { Formik, Form, Field  } from "formik";

export const Searchbar = ({onSubmit}) => {
    
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        onSubmit(values);
        resetForm();
    };

    return(
        <Formik
            initialValues={{ name: ''}}
            onSubmit={handleSubmit}>
<header>
  <Form >
    <button type="submit" >
      <span >Search</span>
    </button>

    <Field
      type="text"
      name="name"
    //   autoComplete="off"
    //   autoFocus
      placeholder="Search images and photos"
    />
  </Form>
    </header>
</Formik >
    
    );
};