import React from "react";
import { twMerge } from "tailwind-merge";

const Historical = ({ title, content, image, imageClassName , textClassName ,cn }) => {
  return (
    <div className={twMerge(" sticky top-30 min-h-screen ",cn)}>
    <div className="border  border-yellow-500 rounded-lg p-6 bg-[#846c48] text-white max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
      
      {/* Text Section */}
      <div className="flex-1 ">
        <h2 className="text-4xl font-bold mb-4 flex ">{title}</h2>
        <p className={textClassName}>{content.split('\n').map((line,index)=> <>
        {line}
        { index < content.split('\n').length -1  && <br />  }
        </>)}</p>
      </div>

      {/* Image Section */}
      {image && (
        <div className="flex flex-shrink-0  ml-6">
          <img
            src={image}
            alt={title}
            className={imageClassName} // Apply custom className
          />
        </div>
      )}




      </div>
    </div>
  );
};

export default Historical;