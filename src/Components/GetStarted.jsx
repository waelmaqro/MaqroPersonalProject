import React from "react";
import Image from "next/image";

const GetStarted = ({header, text, button}) => {
  return (
    <div className="my-[100px] justify-center flex px-4 max-w-[1500px]  md:max-h-[500px] min-[1600px]:max-w-[1500px] md:max-w-[90%] ">
      <div className="grid xxs:grid-cols-1 sm:grid-cols-2  max-w-[1500px]  overflow-hidden border-white border border-opacity-80  text-white gap-[20] content-center">
        <div className="xxs:max-h-[400px] sm:max-h-[100%]  flex xxs:justify-center xxs:text-center sm:justify-start sm:items-start sm:text-start opacity-90 xxs:max-w-screen flex-col md:gap-12 xxs:gap-6 px-[10%] py-[30%]">
          <h1 className="heading xxl:text-6xl sm:text-5xl xxs:text-3xl text font-bold opacity-80 text-white">
            {header}
          </h1>
          <p className="opacity-80 xxl:text-3xl sm:text-3xl xs:text-xl xxs:text-lg " style={{lineHeight: "40px"}}>
            {text}
          </p>
          <button className="bg-primary px-8 py-4 opacity-90  font-medium text-white hover:opacity-80   xxs:text-lg md:text-xl">
            {button}
          </button>
        </div>
        <div className="xxs:max-h-[400px] sm:max-h-full">
          <Image width={1000} height={1000} src="https://th.bing.com/th/id/OIG.pDUQrO22vdwVtxmnb6fl?pid=ImgGn" className="w-full h-full object-cover"/>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
