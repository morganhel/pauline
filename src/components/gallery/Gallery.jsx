import React from 'react';
import PhotoAlbum from 'react-photo-album';
import Photo1 from '../../assets/images/gallerie/pexels-agafonova-photo-3500249-5436452.jpg';
import Photo2 from '../../assets/images/gallerie/pexels-christiane-1274576-2565214.jpg';
import Photo3 from '../../assets/images/gallerie/pexels-cottonbro-4836527.jpg';
import Photo4 from '../../assets/images/gallerie/pexels-cottonbro-4842562.jpg';
import Photo5 from '../../assets/images/gallerie/pexels-cottonbro-4858860.jpg';
import Photo6 from '../../assets/images/gallerie/pexels-koolshooters-7689196.jpg';
import Photo7 from '../../assets/images/gallerie/pexels-markusspiske-5223542.jpg';
import Photo8 from '../../assets/images/gallerie/pexels-monstera-1173648.jpg';
import Photo9 from '../../assets/images/gallerie/pexels-monstera-1408089.jpg';
import Photo10 from '../../assets/images/gallerie/pexels-philipwarp-6188078.jpg';

function Gallery() {
    const photos =[
        {
            src:{Photo1}
        },
        {
            src:{Photo2}
        },
        {
            src:{Photo3}
        },
        {
            src:{Photo4}
        },
        {
            src:{Photo5}
        },
        {
            src:{Photo6}
        },
        {
            src:{Photo7}
        },
        {
            src:{Photo8}
        },
        {
            src:{Photo9}
        },
        {
            src:{Photo10}
        }
    ];

    return (
        <div>
            <h3>filtres</h3>
            <PhotoAlbum layout="rows" photos={photos} />
        </div>
    )
}

export default Gallery;