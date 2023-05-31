'use client'
import React from 'react'
import { Carousel } from 'flowbite-react'
import { CarouselData } from './ComponentData'
import CustomMediaQuery from '@/app/Queries/CustomMediaQuery'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


const FlowCarousel = (Slides) => {
  const isSmallScreen = CustomMediaQuery("(max-width: 600px)");
  return (
    <div className="h-[400px]  sm:h-64 xl:h-80 2xl:h-[500px] max-w-[1500px]" >
    <Carousel slideInterval={5000} leftControl={isSmallScreen ? " " : undefined} rightControl={isSmallScreen ? " " : undefined }>
      {CarouselData.map((slide, index) => (
 
         < div className=" relative w-screen max-w-screen overflow-hidden h-[400px]  sm:h-64 xl:h-80 2xl:h-[500px] bg-opacity-0" key={index} >
                <div className="max-w-[70%] text-white absolute top-[40%] bottom-[40%] left-[20%] right-[20%]  text-center xxl:text-3xl sm:text-xl xs:text-lg xxs:text-md opacity-90 xxs:max-w-screen flex flex-col md:gap-4 xxs:gap-2 font-bold justify-center items-center">
                  <img src='/porche.png' className='w-[50px] rounded-[10px]' />
                  <p className="">
                  {slide.text}
                </p>
                <div className='flex xxs:flex-col sm:flex-row justify-center items-center gap-2'>
                  <AccountCircleIcon className='text-[40px]' />
                  <p>{slide.name}</p>
                </div>
                
                </div>
                
              </div>
         
      ))}
    </Carousel>
  </div>
  )
}

export default FlowCarousel