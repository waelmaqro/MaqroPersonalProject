import React from 'react'
import { Carousel } from 'flowbite-react'
import { HeroSectionSlides } from './ComponentData'

const Hero = ({heading, text, button1, button2, showButtons}) => {
  return (
    <section
    className="flex flex-col  text-center justify-center  z-10 text-white w-screen items-center  h-full px-2 gap-3 md:max-w-[80%] my-[100px]"
  >
    <h1 className="heading xxl:text-6xl sm:text-4xl xs:text-3xl xxs:text-xl text font-bold opacity-90">
      {heading}
    </h1>
    <h1 className=" xxs:w-full  xxl:text-3xl sm:text-xl xxs:text-md opacity-90 xlg:max-w-[60%]">
      {text}
    </h1>

    {showButtons && (
        <div className="flex justify-center items-center opacity-100 sm:flex-row xxs:flex-col gap-4 text-xl my-[20px]">
          <button className="bg-primary px-8 py-3 text-white opacity-100  min-w-[200px]">
            {button1}
          </button>
          <button className="px-8 py-3 border border-white border-opacity-90 text-white  min-w-[200px]">
            {button2}
          </button>
        </div>
      )}
    
   
    <Carousel className='max-w-[1500px]  relative pb-10  '  slideInterval={10000} leftControl=" " rightControl=" ">
      {HeroSectionSlides.map ((data,index) => (
        <>
        <img className="h-full w-full object-cover object-center rounded-lg shaow-lg opacity-95 max-h-[700px] md:max-h-[500px] lg:max-h-[500px] xxl:max-h-[700px]  " src={data.imgSrc} alt='herosectionimage'key={index}/> 
        {/* <p className='xxs:left-0 xxs:right-0 xxs:bottom-2 xs:right-auto absolute xs:left-4 xs:bottom-4 font-semibold opacity-80 text-center  xxl:text-5xl sm:text-3xl xs:text-xl xxs:text-lg'>{data.text}</p>   */}
        </>
      ))}
    
    </Carousel>

  </section>
  )
}

export default Hero