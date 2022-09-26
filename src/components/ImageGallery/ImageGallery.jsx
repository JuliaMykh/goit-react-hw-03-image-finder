import React from "react";
import PropTypes from "prop-types";

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryCont } from './ImageGallery.styled';

export const ImageGallery = ({images, openModal}) => {
    return (
        <ImageGalleryCont >
      {images.map(({ id, description, smallImage, largeImage}) => (
        <ImageGalleryItem
          key={id}
          description={description}
          smallImage={smallImage}
          largeImage={largeImage}
          openModal={openModal}
        />
      ))}
    </ImageGalleryCont>
    )
};

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      smallImage: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired,
    })
  ).isRequired,
};
