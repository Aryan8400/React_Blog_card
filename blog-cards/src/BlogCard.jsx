// src/BlogCard.jsx
import React from "react";

const BlogCard = ({ image, title, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 flex flex-col justify-between">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4 flex flex-col justify-between flex-1">
        {/* Container for Title and Description */}
        <div className="flex-1 mb-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          {/* Ensure consistent height for the description */}
          <p className="text-gray-700 mb-4 min-h-[80px]">
            {description}
          </p>
        </div>
        {/* Button Positioned at the Bottom */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-auto">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
