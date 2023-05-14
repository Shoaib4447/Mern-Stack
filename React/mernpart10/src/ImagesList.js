import React from 'react';

const ImagesList = (props)=> {

    const images = props.images.map((image)=>{
        return  <img src={image.webformatURL} alt='Not Working' />
    });
  
  return (
    <>
      {images}
    </>
  )
}

export default ImagesList;