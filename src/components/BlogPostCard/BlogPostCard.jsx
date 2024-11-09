// BlogPostCard.jsx

import React from 'react';

const BlogPostCard = ({ profileImage, username, title, date, text }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={profileImage} alt={username} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <div className="flex items-center text-gray-600 mt-2">
          <img src={profileImage} alt={username} className="w-8 h-8 rounded-full mr-2" />
          <span>{username}</span>
          <span className="mx-2">|</span>
          <span>{date}</span>
        </div>
        <p className="text-gray-700 mt-2">{text}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogPostCard;