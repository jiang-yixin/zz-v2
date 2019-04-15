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
    const works = [
        { image: Photo1, link: '/works/1' },
        { image: Photo2, link: '/works/2' },
        { image: Photo3, link: '/works/1' },
        { image: Photo4, link: '/works/2' },
        { image: Photo5, link: '/works/1' },
        { image: Photo6, link: '/works/2' },
        { image: Photo7, link: '/works/1' },
        { image: Photo8, link: '/works/2' },
        { image: Photo9, link: '/works/1' }
    ]

    const images = works.map((work) => {
        return (
          <ImageCard key={work.image} image={work.image} link={work.link}/>
        )
    })

    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList