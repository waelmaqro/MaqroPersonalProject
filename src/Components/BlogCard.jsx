import React from "react";
import { Card } from "flowbite-react";

const BlogCard = ({imgSrc, authorName, blogTitle, date, duration}) => {
  return (
    <div className="flex justify-center items-center">
      <div class="max-w-[500px] flex flex-col rounded-lg shadow bg-gray-700 border-gray-600 text-white  text-opacity-80 gap-2">
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
  );
};

export default BlogCard;
