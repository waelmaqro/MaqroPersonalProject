import React from 'react'
import { Carousel } from 'flowbite-react'
import { HeroSectionSlides } from './ComponentData'

const Hero = ({heading, text, button1, button2, showButtons}) => {
  return (
    <section
    className="flex flex-col flex-grow text-center justify-center items-center gap-4 overflow-hidden z-10 text-white w-screen  h-screen px-2"
  >
    <h1 className="heading xxl:text-6xl sm:text-4xl xs:text-3xl xxs:text-xl text font-bold opacity-90">
      {heading}
    </h1>
    <h1 className=" xxs:w-full xxl:max-w-[1500px] xxl:text-5xl sm:text-3xl xs:text-xl xxs:text-lg opacity-90">
      {text}
    </h1>

    {showButtons && (
        <div className="flex justify-center items-center gap-2 opacity-100 sm:flex-row xxs:flex-col">
          <button className="bg-primary px-8 py-3 text-white opacity-100 rounded-md min-w-[200px]">
            {button1}
          </button>
          <button className="px-8 py-3  bg-gray-700 text-white rounded-md min-w-[200px]">
            {button2}
          </button>
        </div>
      )}
    
   
    <Carousel className='max-w-[1500px] w-[90%] relative pb-10' style={{ height: "60%"}} slideInterval={10000} leftControl=" " rightControl=" ">
      {HeroSectionSlides.map ((data,index) => (
        <>
        <img className="h-full w-full object-cover object-center rounded-lg shaow-lg opacity-95" src={data.imgSrc} alt='herosectionimage'key={index}/> 
        {/* <p className='xxs:left-0 xxs:right-0 xxs:bottom-2 xs:right-auto absolute xs:left-4 xs:bottom-4 font-semibold opacity-80 text-center  xxl:text-5xl sm:text-3xl xs:text-xl xxs:text-lg'>{data.text}</p>   */}
        </>
      ))}
    
    </Carousel>

  </section>
  )
}

export default Hero