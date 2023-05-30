import React from 'react'

const Hero = ({heading, text, button1, button2}) => {
  return (
    <section
    className="flex flex-col flex-grow text-center justify-center items-center gap-4 overflow-hidden z-10 text-white w-screen  h-screen"
  >
    <h1 className="heading xxl:text-6xl sm:text-4xl xs:text-3xl xxs:text-xl text font-semibold opacity-100">
      {heading}
    </h1>
    <h1 className=" xxs:w-full xxl:max-w-[1500px] xxl:text-5xl sm:text-3xl xs:text-xl xxs:text-lg opacity-100">
      {text}
    </h1>

    <div className="flex justify-center items-center gap-2 opacity-100 sm:flex-row xxs:flex-col ">
      <button className="bg-primary px-8 py-3 text-white opacity-100 rounded-md min-w-[200px]">
        {button1}
      </button>
      <button className="px-8 py-3  bg-gray-700 text-white rounded-md min-w-[200px]">
        {button2}
      </button>
    </div>
    <div className="max-w-[1500px] w-100% bg-white"></div>
  </section>
  )
}

export default Hero