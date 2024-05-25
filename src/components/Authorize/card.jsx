// src/components/Authorize/card.js
import React, { useEffect, useState } from 'react';
import { likeProperty, interestedProperty, post } from '../../services/apiHandler';

export default function Card({ _id, title, description, image, price, area,like,intrested }) {
  const [liked, setLiked] = useState(like);
  const [interested, setInterested] = useState(intrested);

  const handleLike = async () => {
    try {
      await post(`/api/property/${_id}/like`);
      setLiked(!liked);
    } catch (error) {
      console.error('Error liking property:', error);
    }
  };

  const handleInterested = async () => {
    try {
      await post(`/api/property/${_id}/interested`);
      setInterested(true);
    } catch (error) {
      console.error('Error expressing interest in property:', error);
    }
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-xl">{title}</div>
          <button onClick={handleLike} className="focus:outline-none">
            {liked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="red"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 20.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                />
              </svg>
            )}
          </button>
        </div>
        <p className="text-gray-700 text-base mb-2">{description}</p>
        <p className="text-gray-700 text-base mb-2">Nearby Area: {area}</p>
        <div className="text-gray-900 text-lg font-semibold mb-2">₹{price}</div>
        <button
          onClick={handleInterested}
          className="mt-2 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
          disabled={interested}
        >
          {interested ? "Interested!" : "I'm Interested"}
        </button>
      </div>
    </div>
  );
}
