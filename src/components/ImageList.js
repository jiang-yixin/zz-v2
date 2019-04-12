import React from 'react'
import ImageCard from './ImageCard'

import '../css/ImageList.css'


const ImageList = (props) => {
    const imageNames = [
      '../images/photo-1.jpeg', '../images/photo-2.jpeg'
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