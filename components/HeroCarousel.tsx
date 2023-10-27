'use client'

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
const heroImage=[
    {imgUrl:'/assets/images/hero-1.svg', alt:'Smart watch'},
    {imgUrl:'/assets/images/hero-2.svg', alt:'Bag'},
    {imgUrl:'/assets/images/hero-3.svg', alt:'Lamp'},
    {imgUrl:'/assets/images/hero-4.svg', alt:'Air Fryer'},
    {imgUrl:'/assets/images/hero-5.svg', alt:'Chair'}
]
const HeroCarousel = () => {
  return (
    <div className='hero-carousel mt-20' >
        <Carousel 
            showThumbs={false}  
            autoPlay 
            infiniteLoop
            interval={2000}
            showArrows={false}
            showStatus={false}
        >
                {heroImage.map((image) => (
                    <Image 
                        src={image.imgUrl}
                        alt={image.alt}
                        width={484}
                        height={484}
                        key={image.alt}
                        className='object-contain'
                    />


                ))}
            </Carousel>

            <Image 
                src={'/assets/icons/hand-drawn-arrow.svg'}
                alt='arrow'
                width={175}
                height={175}
                className='max-x1:hidden absolute -left-[15%] bottom-0 z-0'
            />
    </div>
  )
}

export default HeroCarousel
