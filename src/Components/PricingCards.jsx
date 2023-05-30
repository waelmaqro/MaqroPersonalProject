"use client";
import React, { useState } from "react";
// import { Card } from "flowbite-react";
import { PricingData } from "./ComponentData";

const PricingCards = () => {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  const getPrice = (pricing) => {
    return isYearly ? pricing.yearlyPrice : pricing.monthlyPrice;
  };

  const getPeriod = () => {
    return isYearly ? "/year" : "/month";
  };

  return (
    <div className="z-20 max-w-[1500px]  flex justify-center items-center flex-col ">
      <div className="flex justify-center mb-4  border-primary border-4 hover:opacity-90 rounded-full bg-gray-200 py-1 px-1">
        <button
          className={`${
            isYearly ? "bg-gray-200 text-gray-900 text-opacity-80  " : " bg-primary  text-white"
          } px-4 py-2  rounded-full min-w-[92.16px] `}
          onClick={handleToggle}
        >
          Monthly
        </button>
        <button
          className={`${
            isYearly ? "bg-primary text-white" : " bg-gray-200    text-gray-900 text-opacity-80"
          } px-4 py-2  rounded-full min-w-[92.16px]`}
          onClick={handleToggle}
        >
          Yearly
        </button>
      </div>
      
      {/* Card */}
      <div className="grid xxs:grid-cols-1 md:grid-cols-3 gap-4  px-4 justify-center items-center max-w-[1500px]">
        {PricingData.map((pricing, index) => (
          <div
            key={index}
           className=" xs:min-w-[350px] md:min-w-[280px] bg-gray-700 p-6 rounded-md text-white opacity-80 "
          >
            <div  className="xs:grid xs:grid-cols-3 md:flex md:flex-col xxs:flex xxs:flex-col max-w-fit w-[500px] xs:w-screen xs:items-center xs:gap-4 md:items-start sm:mx-auto ">
            {/* div 1 */}
            <div>
            <h5 className="mb-4 text-xl font-medium ">
              {pricing.title}
            </h5>
            <div className="flex items-baseline">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">
                {getPrice(pricing)}
              </span>
              <span className="ml-1 text-xl font-normal ">
                {getPeriod()}
              </span>
            </div>
            </div>
            {/* div 2 */}
            <div>
            <ul role="list" className="my-7 space-y-5">
              {pricing.features.map((feature, index) => (
                <li className="flex space-x-3" key={index}>
                  <svg
                    className="h-5 w-5 shrink-0 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-base font-normal leading-tight ">
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
                    <svg
                      className="h-5 w-5 shrink-0 text-gray-400 dark:text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-normal leading-tight text-gray-500">
                      {feature}
                    </span>
                  </li>
                ))}
            </ul>
            
            </div>
            <button
              type="button"
              className="inline-flex w-full justify-center rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium text-white hover:opacity-80 focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900"
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