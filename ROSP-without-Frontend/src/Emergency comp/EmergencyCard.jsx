import React from "react";


const Card = ({ title, description, url, image, date}) => {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden h-[450px] max-w-7xl mx-auto my-8">
      <div className="flex flex-col md:flex-row items-start">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={image}
            alt={title}
            className="w-[700px] h-[467px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 text-lg mb-4">
            {description}
          </p>
          <div className="flex items-center text-blue-600 font-semibold">
            <span className="material-icons-outlined mr-2"><a href={url}>Go to Website..</a></span>
              
          </div>
          <div className="flex justify-end h-full mt-[50px] text-[18px]">
            <span><p className="inline font-serif">Date of Published:</p> {date.slice(0, 10)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
