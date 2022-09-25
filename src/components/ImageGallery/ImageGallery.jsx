import React from "react";
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
