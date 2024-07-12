import React from 'react';
import Photos from '../../assets/data/photos.json';

function Gallery() {

    return (
        <div className='gallery'>
            <div className='gallery__content'>
                {Photos.map((photo)=>{
                    return(
                        console.log(photo.src),
                    <img src={photo.src} alt='exemple' />
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery;