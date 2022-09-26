import React from "react";
import PropTypes from "prop-types";

import { ImageGalleryLi, ImageGalleryItemImg } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ description, smallImage, largeImage, openModal }) => {
    return (
        <ImageGalleryLi onClick={openModal}>
            <ImageGalleryItemImg src={smallImage} alt={description} data-large={largeImage} />
        </ImageGalleryLi>
    )
};

ImageGalleryItem.propTypes = {
    description: PropTypes.string.isRequired,
    smallImage: PropTypes.string.isRequired,
    largeImage: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};

