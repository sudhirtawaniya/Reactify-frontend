// src/components/PropertyPopup.js
import React, { useState } from 'react';

export default function PropertyPopup({ isOpen, onClose, onSubmit, property }) {
  const [formData, setFormData] = useState(property || {
    title: '',
    description: '',
    price: '',
    image: '',
    area:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">{property ? 'Edit Property' : 'Add Property'}</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="w-full mb-2 p-2 border rounded"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="w-full mb-2 p-2 border rounded"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Rent"
          className="w-full mb-2 p-2 border rounded"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="area"
          placeholder="Nearby Area"
          className="w-full mb-2 p-2 border rounded"
          value={formData.area}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          className="w-full mb-2 p-2 border rounded"
          value={formData.image}
          onChange={handleChange}
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-blue-950 text-white p-2 rounded mr-2"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white p-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
