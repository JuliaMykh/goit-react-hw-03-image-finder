import React from "react";
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images}) => {
    return (
        <ul >
      {images.map(({ id, description, smallImage, largeImage}) => (
        <ImageGalleryItem
          key={id}
          description={description}
          smallImage={smallImage}
          largeImage={largeImage}
          
        />
      ))}
    </ul>
    )
};
