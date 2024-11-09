import React from 'react';
import PropTypes from 'prop-types';

function MyBlog({ blog }) {
  const handleEdit = () => {

    console.log("Edit button clicked");
  };

  const handleDelete = () => {
   
    console.log("Delete button clicked");
  };

  return (
    <div className="w-full max-w-xl mt-10 p-5 bg-white shadow-xl rounded-lg">
      <div className="flex items-center mb-5">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg text-black font-semibold">John Doe</h3>
          <p className="text-sm text-black">
            {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}
          </p>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-3">{blog.title}</h2>

      <textarea
        type="text"
        value={blog.text}
        readOnly
        disabled
        className="w-full text-black mb-5 border border-gray-300 rounded p-2"
      ></textarea>

      <div className="flex justify-between">
        <button className="btn btn-outline btn-warning" onClick={handleEdit}>Edit</button>
        <button className="btn btn-outline btn-error" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

MyBlog.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default MyBlog;