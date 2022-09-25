import React from "react";
import { ImageGalleryLi, ImageGalleryItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ description, smallImage, largeImage, openModal }) => {
    return (
        <ImageGalleryLi onClick={openModal}>
            <ImageGalleryItemImg src={smallImage} alt={description} data-large={largeImage} />
        </ImageGalleryLi>
    )
};