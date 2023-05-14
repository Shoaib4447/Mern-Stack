import React from "react";

const ImageList = (props)=>{
    const images = props.images.map((image)=>{
        return <img src={image.webformatURL} alt='NOT Fetched' />
    });

    return(
        <>
            {images}
        </>
    )
}


export default ImageList;


