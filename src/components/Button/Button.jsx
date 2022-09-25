import React from "react";
import { BtnLoadMore } from './Button.styled';

export const Button = ({ onNextFetch }) => {
  return (
    <BtnLoadMore type="button" onClick={onNextFetch}>
      Load more 
    </BtnLoadMore>
  );
}