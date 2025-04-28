import React from "react";
import { twMerge } from "tailwind-merge";

const Historical = ({ title, content, image, imageClassName, textClassName, cn }) => {
  return (
    <div className={twMerge("md:sticky md:top-30", cn)}>
      <div className="border border-yellow-500 rounded-lg p-4 sm:p-6 bg-[#846c48] text-white max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
        
        {/* Image Section */}
        {image && (
          <div className="w-full mb-4 md:mb-0 md:ml-6 md:w-auto flex-shrink-0 flex justify-center md:justify-start">
            <img
              src={image}
              alt={title}
              className={twMerge(
                "w-40 h-40 object-cover rounded-lg  md:w-70 md:h-70",
                imageClassName
              )}
            />
          </div>
        )}

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className={twMerge("text-base sm:text-lg", textClassName)}>
            {content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                {index < content.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Historical;
