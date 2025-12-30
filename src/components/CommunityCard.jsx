import React from 'react';
const CommunityCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
      <p className="text-gray-600 mb-4">{post.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">By {post.author}</span>
        <span className="text-sm text-gray-500">{post.date}</span>
      </div>
    </div>
  );
};

export default CommunityCard;