import React from "react";
import Image from "next/image";

const GetStarted = ({header, text, button}) => {
  return (
    <div className="my-[100px] justify-center flex px-4 max-w-[1500px]">
      <div className="grid xxs:grid-cols-1 md:grid-cols-2  max-w-[1500px] rounded-lg overflow-hidden shadow-lg border-opacity-60 text-white gap-[20] content-center">
        <div className=" xxs:order-2 sm:order-1 flex justify-start items-start text-start opacity-90 xxs:max-w-screen flex-col md:gap-12 xxs:gap-8 px-[10%] py-[25%]">
          <h1 className="heading xxl:text-5xl sm:text-3xl xs:text-xl xxs:text-lg text font-bold opacity-80">
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
          <Image width={1000} height={1000} src="https://th.bing.com/th/id/OIG.pDUQrO22vdwVtxmnb6fl?pid=ImgGn" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
