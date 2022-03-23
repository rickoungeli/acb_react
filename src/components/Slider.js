import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    const baseUrl = '../img/carroussel/'
    const datas = [
        {id: 1, image: `${baseUrl}image-1.jpg`, title: 'Image 1', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 2, image: `${baseUrl}image-2.jpg`, title: 'Image 2', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 3, image: `${baseUrl}image-3.jpg`, title: 'Image 3', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 4, image: `${baseUrl}image-4.jpg`, title: 'Image 4', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 5, image: `${baseUrl}image-5.jpg`, title: 'Image 5', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 6, image: `${baseUrl}image-6.jpg`, title: 'Image 6', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 7, image: `${baseUrl}image-7.jpg`, title: 'Image 7', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 8, image: `${baseUrl}image-8.jpg`, title: 'Image 8', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 9, image: `${baseUrl}image-9.jpg`, title: 'Image 9', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 10, image: `${baseUrl}image-10.jpg`, title: 'Image 10', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 11, image: `${baseUrl}image-11.jpg`, title: 'Image 10', text: 'Lorem ipsum dolor sit consectetur'}, 
        {id: 12, image: `${baseUrl}image-12.jpg`, title: 'Image 10', text: 'Lorem ipsum dolor sit consectetur'}, 
    ]
    return (
        <Carousel 
            className='sliders' 
            autoPlay 
            interval={3000} 
            infiniteLoop 
            thumbWidth={50}
            showIndicators={false}
            showStatus={false}
            stopOnHover
        >
            

            { datas.map(slide => (
                <div key={slide.id} className='img-container'>
                    <img src={slide.image} alt='' />
                </div>
            )) }
        </Carousel>
    );
};

export default Slider;