import React from "react";


const BlogCard = ({imgSrc, authorName, blogTitle, date, duration}) => {
  return (
    <div className="">
    <div className=" xs:min-w-[350px] md:min-w-[280px] bg-gray-700 xxs:p-0 xs:p-6 rounded-md text-white opacity-80  ">
      <div className="sm:grid sm:grid-cols-2 md:flex md:flex-col xxs:flex xxs:flex-col  ">
        <img src={imgSrc} />
        <div className="flex flex-col p-4">
        <h5 className="text-xl tracking-tight">
            {authorName}
          </h5>
          <h5 className="text-2xl  tracking-tight ">
            {blogTitle}
          </h5>
          <div className="flex justify-between items-center w-full ">
          <p className="font-normal ">
            {date}
          </p>
          <div className="border-2 border-opacity-80 rounded-full flex justify-center items-center px-4 py-2 bg-primary opacity-80 text-opacity-100 text-white">
            {duration}
          </div>
          </div>
          </div>
      
      </div>
    </div>

</div>
  );
};

export default BlogCard;
