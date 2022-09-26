import React from "react";
import { BtnLoadMore } from './Button.styled';
import PropTypes from "prop-types";

export const Button = ({ onNextFetch }) => {
  return (
    <BtnLoadMore type="button" onClick={onNextFetch}>
      Load more 
    </BtnLoadMore>
  );
}

Button.propTypes = {
  onNextFetch: PropTypes.func.isRequired,
};