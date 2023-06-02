"use client";
import React, { useState } from "react";

import { PricingData } from "./ComponentData";
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const PricingCards = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const getPrice = (pricing) => {
    return isYearly ? pricing.yearlyPrice : pricing.monthlyPrice;
  };

  const getPeriod = () => {
    return isYearly ? "/user/year" : "/user/month";
  };

  return (
    <div className="z-20 max-w-[1500px] max-w-screen flex justify-center items-center flex-col ">
      <div className="flex justify-center  border-primary border-4 hover:opacity-90  bg-gray-200 py-1 px-1 mb-[50px]">
        <button
          className={`${
            isYearly
              ? "bg-gray-200 text-gray-900 text-opacity-80  "
              : " bg-primary  text-white"
          } px-4 py-2   min-w-[92.16px] xxl:text-xl xxs:text-lg`}
          onClick={handleToggle}
        >
          Monthly
        </button>
        <button
          className={`${
            isYearly
              ? "bg-primary text-white"
              : " bg-gray-200    text-gray-900 text-opacity-80"
          } px-4 py-2   min-w-[92.16px] xxl:text-xl xxs:text-lg`}
          onClick={handleToggle}
        >
          Yearly
        </button>
      </div>

      {/* Card */}
      <div className="grid xxs:grid-cols-1 md:grid-cols-3 xxs:gap-4 xlg:gap-10 md:gap-6   px-4 justify-center  items-center max-w-[1500px] max-w-screen">
        {PricingData.map((pricing, index) => (
          <div
            key={index}
            className={`bg-gray-700 p-6 border-white border border-opacity-80  text-white opacity-80 flex justify-center ${pricing.popular ? "md:scale-105" : ""}`}
          >
            <div className="xs:grid xs:grid-cols-3 md:flex md:flex-col xxs:flex xxs:flex-col xxs:justify-center w-fit  xxs:w-screen xxs:items-start xxs:gap-4 md:items-start sm:mx-auto l md:w-[300px] lg:w-[350px] xlg:w-[400px] min-[1600px]:w-[screen] ">
              {/* div 1 */}
              <div className="w-full ">
                <div className="flex xs:flex-col md:flex-row justify-between md:items-center">
                  <h5 className="mb-4 heading xxl:text-5xl sm:text-3xl xxs:text-2xl text font-bold opacity-80 text-white  ">
                    {pricing.title}
                  </h5>
                  <h2 className={`bg-primary rounded-full px-2 py-1 ${pricing.popular ? "opacity-100" : "opacity-0"} w-[74px] h-[34px]`}>Popular</h2>
                </div>
                <h5 className="mb-4 heading xxl:text-xl xxs:text-lg text opacity-80 text-white  ">
                    {pricing.subtitle}
                  </h5>
                <div className="flex items-baseline">
                  <span className="xxl:text-5xl sm:text-3xl xxs:text-2xl text font-bold opacity-80 text-white">$</span>
                  <span className="xxl:text-5xl sm:text-3xl xxs:text-2xl text font-bold opacity-80 text-white">
                    {getPrice(pricing)}
                  </span>
                  <span className="ml-1 text-xl font-normal ">
                    {getPeriod()}
                  </span>
                </div>
              </div>
              {/* div 2 */}
              <div>
                <ul role="list" className="my-7 space-y-2.5">
                  {pricing.features.map((feature, index) => (
                    <li className="flex space-x-2" key={index}>
                      <CheckCircleOutlineIcon className="h-10 w-10  text-primary"/>
                    
                      <span className="xxl:text-xl xxs:text-lg text opacity-80 text-white  ">
                        {feature}
                      </span>
                    </li>
                  ))}
                  {pricing.nonFeatures &&
                    pricing.nonFeatures.map((feature, index) => (
                      <li
                        className="flex space-x-3 line-through decoration-gray-500"
                        key={index}
                      >
                        <CloseIcon className="text-gray-400 h-10 w-10"/>
                    
                        <span className="text-base font-normal leading-tight text-gray-500 xxl:text-xl xxs:text-lg  ">
                          {feature}
                        </span>
                      </li>
                    ))}
                </ul>
              </div>
              <button
                type="button"
                className={`inline-flex w-full justify-center px-5 py-2.5 text-center text-sm font-medium text-white hover:opacity-80   xxs:text-lg md:text-xl  ${pricing.popular ? "bg-primary" : " border-white border-2"}`}
              >
                {pricing.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCards;
