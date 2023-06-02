import React from "react";
import Image from "next/image";

const GetStarted = ({header, text, button}) => {
  return (
    <div className="my-[100px] justify-center flex px-4 max-w-[1500px]  md:max-h-[500px]">
      <div className="grid xxs:grid-cols-1 md:grid-cols-2  max-w-[1500px]  overflow-hidden border-white border border-opacity-80  text-white gap-[20] content-center">
        <div className=" xxs:order-2 sm:order-1 flex justify-start items-start text-start opacity-90 xxs:max-w-screen flex-col md:gap-12 xxs:gap-6 px-[10%] py-[30%]">
          <h1 className="heading xxl:text-6xl sm:text-3xl xxs:text-2xl text font-bold opacity-80 text-white">
            {header}
          </h1>
          <p className="opacity-80 xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg " style={{lineHeight: "40px"}}>
            {text}
          </p>
          <button className="bg-primary px-8 py-4 opacity-90  font-medium text-white hover:opacity-80   xxs:text-lg md:text-xl">
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
