// src/components/Navbar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Navbar({filter}) {

  const navigate = useNavigate();

 

  const handleAuthSuccess = () => {
    navigate('/seller-dashboard');
  };

  return (
    <nav className="bg-blue-600 p-4 flex justify-between items-center">
      <div className="text-white text-2xl font-bold">Rentify</div>
      <div className="flex items-center">
        <input
          type="text"
          onChange={(e)=>filter(e.target.value)}
          placeholder="Search"
          className="mr-4 p-2 rounded"
        />
        <button
          onClick={handleAuthSuccess}
          className="bg-yellow-500 text-white p-2 rounded"
        >
          Become a Seller
        </button>
      </div>
     
    </nav>
  );
}
