"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import { CarouselData } from "./ComponentData";
import CustomMediaQuery from "@/app/Queries/CustomMediaQuery";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const FlowCarousel = (Slides) => {
  const isSmallScreen = CustomMediaQuery("(max-width: 1019px)");
  return (
    <div className="xxs:h-[500px] xl:h-[700px] w-screen md:max-w-[90%] min-[1600px]:max-w-[1500px] ">
      <Carousel
        slideInterval={5000}
        leftControl={isSmallScreen ? " " : <div className="p-5 bg-gray-700 bg-opacity-60 "><ArrowBackIosNewIcon className="text-white 2xl:text-[30px] md:text-[20px]"/> </div>}
        rightControl={isSmallScreen ? " " : <div className="p-5 bg-gray-700 bg-opacity-60 "><ArrowForwardIosIcon className="text-white 2xl:text-[30px] md:text-[20px]"/> </div>}
        indicators={false}
      >
        {CarouselData.map((slide, index) => (
          <div
            className=" relative w-screen max-w-screen overflow-hidden h-[100%] flex justify-center items-center bg-opacity-0"
            key={index}
          >
            <div className="md:max-w-[60%] 2xl:max-w-[1100px] text-white absolute translate-y-0  text-center xxl:text-3xl sm:text-xl xs:text-lg xxs:text-md opacity-90 xxs:max-w-[95%] flex flex-col md:gap-8 xxs:gap-2 justify-center items-center">
              <img src="/porche.png" className="w-[50px] rounded-[10px] mb-[50px]" />
              <p className="xl:text-5xl md:text-3xl xxs:text-xl">{slide.text}</p>
              <div className="flex xxs:flex-col sm:flex-row justify-center items-center gap-2">
                <AccountCircleIcon className="xlg:text-[90px] xxs:text-[50px]" />
                <div className="flex">
                <p className="font-bold">{slide.firstname} </p>
                <p className="font-bold">&nbsp;{slide.lastname}</p>
                <p>&nbsp;- {slide.jobtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default FlowCarousel;
