import React from "react";
import PropTypes from 'prop-types';
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
        // console.log(values);
        onSubmit(values.name);
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

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};