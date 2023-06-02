import React from "react";
import Image from "next/image";

const FeatureCard = ({ title, imageUrl, description, flipSwitch, divid }) => {
  const imageOrder = flipSwitch ? "order-1" : "lg:order-2";
  const textOrder = flipSwitch ? "order-2" : "lg:order-1";

  return (
    <div
      className="xxs:w-full lg:max-w-[1500px] items-center flex flex-col gap-8 justify-center "
      id={divid}
    >
      <div className="grid lg:grid-cols-2 xxs:grid-cols-1 grid-cols-2 xxs:gap-2 lg:gap-[17%] px-4 items-center justify-center text-white opacity-80">
        {/* Image */}
        <div className={`flex ${imageOrder}`}>
          <Image
            src={imageUrl}
            alt={title}
            className=" object-cover opacity-70 rounded-lg w-full"
            width={1000}
            height={1000}
          />
        </div>
        {/* Text */}
        <div
          className={`flex flex-col justify-center py-auto text-start h-full gap-4 ${textOrder} gap-6 `}
        >
          <h1 className="heading xxl:text-6xl sm:text-4xl xs:text-3xl xxs:text-xl  text font-semibold opacity-80  items-end">
            {title}
          </h1>
          <div className="flex flex-col gap-10">
            <h1 className="xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg opacity-80  items-end">
              {description}
            </h1>
            <div className="flex justify-start gap-2 opacity-100 sm:flex-row xxs:flex-col">
              <button className="bg-primary px-8 py-3 opacity-100  min-w-[130px] xxl:text-2xl sm:text-xl xxs:text-lg">
                Try now
              </button>
              <button className="px-8 py-3 hover:bg-gray-700   min-w-[130px]  xxl:text-2xl sm:text-xl xxs:text-lg">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
