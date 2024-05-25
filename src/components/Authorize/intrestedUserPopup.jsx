// src/components/InterestedUsersPopup.js
import React, { useEffect, useState } from 'react';
import { get } from '../../services/apiHandler';


export default function InterestedUsersPopup({ isOpen, onClose, propertyId }) {
  const [interestedUsers, setInterestedUsers] = useState([]);

  useEffect(() => {
    const fetchInterestedUsers = async () => {
      if (propertyId) {
        const response = await get(`/api/property/${propertyId}/interested-users`);
        setInterestedUsers(response.data);
      }
    };

    fetchInterestedUsers();
  }, [propertyId]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Interested Users</h2>
        <ul>
          {interestedUsers.map((user) => (
            <li key={user._id} className="mb-2 p-2 border rounded">
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="w-full mt-4 p-2 bg-gray-500 text-white rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
