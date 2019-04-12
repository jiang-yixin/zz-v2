import React from 'react'
import ImageCard from './ImageCard'

import '../css/ImageList.css'

import Photo1 from '../images/photo-1.jpeg'
import Photo2 from '../images/photo-2.jpeg'
import Photo3 from '../images/photo-3.jpeg'
import Photo4 from '../images/photo-4.jpeg'
import Photo5 from '../images/photo-5.jpeg'
import Photo6 from '../images/photo-6.jpeg'
import Photo7 from '../images/photo-7.jpeg'
import Photo8 from '../images/photo-8.jpeg'
import Photo9 from '../images/photo-9.jpeg'

const ImageList = (props) => {
    const imageNames = [
        Photo1, 
        Photo2, 
        Photo3, 
        Photo4, 
        Photo5, 
        Photo6, 
        Photo7, 
        Photo8, 
        Photo9
    ]

    const images = imageNames.map((image) => {
        return (
          <ImageCard key={image} image={image} />
        )
    })

    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList