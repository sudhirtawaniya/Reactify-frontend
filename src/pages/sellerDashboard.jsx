// src/components/SellerDashboard.js
import React, { useEffect, useState } from 'react';
import { get, post, put, remove } from '../services/apiHandler';
import PropertyPopup from '../components/Authorize/propertyPopup';
import InterestedUsersPopup from '../components/Authorize/intrestedUserPopup';


export default function SellerDashboard() {
  const [properties, setProperties] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isInterestedPopupOpen, setIsInterestedPopupOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [interestedPropertyId, setInterestedPropertyId] = useState(null);

  const fetchProperties = async () => {
    const response = await get('/api/property/seller');
    const data = await response.data;
    setProperties(data);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const handleAddProperty = () => {
    setSelectedProperty(null);
    setIsPopupOpen(true);
  };

  const handleEditProperty = (property) => {
    setSelectedProperty(property);
    setIsPopupOpen(true);
  };

  const handleViewInterestedUsers = (propertyId) => {
    setInterestedPropertyId(propertyId);
    setIsInterestedPopupOpen(true);
  };

  const handleSaveProperty = async (formData) => {
    try {
        let res=''
        if (selectedProperty) {
            res= await put(`/api/property/${selectedProperty._id}`, formData);
            
          } else {
           res= await post('/api/property', formData);
          }
        //   alert(res.data.message) 
    } catch (error) {
      alert(error)  
    }
  
    setIsPopupOpen(false);
    fetchProperties();
  };

  const handleDeleteProperty = async (id) => {
    const response = await remove(`/api/property/${id}`);
    const data = await response.data;
    if (data.status) {
      fetchProperties();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Seller Dashboard</h2>
      <button
        onClick={handleAddProperty}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        Add Property
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <div key={property._id} className="p-4 border rounded shadow-lg">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="text-xl font-bold mb-2">{property.title}</h3>
            <p className="text-gray-700 mb-2">{property.description}</p>
            <p className="text-gray-700 mb-2">NearBy Area:{property.area}</p>
            <p className="text-gray-900 font-bold mb-2">Rent: ₹{property.price}</p>
            <p className="text-gray-600 mb-2">Likes: {property.likes.length}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleEditProperty(property)}
                className="bg-blue-500 text-white p-2 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProperty(property._id)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
              <button
                onClick={() => handleViewInterestedUsers(property._id)}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                Interested Users
              </button>
            </div>
          </div>
        ))}
      </div>
      <PropertyPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onSubmit={handleSaveProperty}
        property={selectedProperty}
      />
      <InterestedUsersPopup
        isOpen={isInterestedPopupOpen}
        onClose={() => setIsInterestedPopupOpen(false)}
        propertyId={interestedPropertyId}
      />
    </div>
  );
}
