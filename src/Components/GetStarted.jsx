import React from "react";

const GetStarted = ({header, text, button}) => {
  return (
    <div className="my-[100px] justify-center flex px-4 max-w-[1500px]">
      <div className="grid xxs:grid-cols-1 md:grid-cols-2  max-w-[1500px]  border-2 border-gray-900 border-opacity-60 text-white gap-[20]">
        <div className=" xxs:order-2 sm:order-1 flex justify-start items-start text-start opacity-90 xxs:max-w-screen flex-col md:gap-12 xxs:gap-8  font-bold py-[20%] px-[10%]">
          <h1 className="heading xxl:text-5xl sm:text-3xl xs:text-xl xxs:text-lg text font-semibold opacity-80">
            {header}
          </h1>
          <p className="opacity-80 xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg " style={{lineHeight: "40px"}}>
            {text}
          </p>
          <button className="bg-primary px-8 py-3 text-white opacity-90 rounded-md min-w-[130px]">
            {button}
          </button>
        </div>
        <div className="xxs:order-1 sm:order-2">
          <img src="https://images.unsplash.com/photo-1476067897447-d0c5df27b5df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
