import React from "react";

export const ImageGalleryItem = ({ description, smallImage, largeImage}) => {
    return (
        <li >
            <img src={smallImage} alt={description} data-large={largeImage} />
        </li>
    )
};