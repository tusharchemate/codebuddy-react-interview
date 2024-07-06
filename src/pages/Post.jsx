import React from "react";

const Post = ({ firstName, lastName, image, writeup }) => {
  return (
    <div className="rounded-lg bg-white p-7 shadow-lg">
      <h2 className="text-2xl font-bold">{`${firstName} ${lastName}`}</h2>
      <img src={image} alt={writeup} className="my-4 rounded-lg" />
      <p className="text-gray-700">{writeup}</p>
    </div>
  );
};

export default Post;
