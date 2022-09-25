import React from "react";
import { Formik } from "formik";
import {
  SearchBar,
  SearchForm,
  SearchFormBtn,
  SearchFormSpan,
  SearchFormInput
} from './SearchBar.styled';

export const Searchbar = ({onSubmit}) => {
    
    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        onSubmit(values);
        resetForm();
    };

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={handleSubmit}>
      <SearchBar>
        <SearchForm>
            <SearchFormBtn type="submit" >
              <SearchFormSpan >Search</SearchFormSpan>
            </SearchFormBtn>
           
              <SearchFormInput
                type="text"
                name="name"
                //   autoComplete="off"
                //   autoFocus
                placeholder="Search images and photos"
              />
          </SearchForm>
      </SearchBar>
    </Formik >
    
  );
};