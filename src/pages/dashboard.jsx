// src/pages/Dashboard.js
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Authorize/navbar';
import Card from '../components/Authorize/card';
import { get } from '../services/apiHandler';

export default function Dashboard() {
  const [properties, setProperties] = useState([]);
  const [Apiproperties, setApiProperties] = useState([]);
  const fetchProperties = async () => {
    try {
      const response = await get(`/api/property`);;
      setProperties(response.data);
      setApiProperties(response.data)
    } catch (error) {
      console.error('Error fetching properties:', error);
    }
  };
  useEffect(() => {
    

    fetchProperties();
  }, []);

  const filter=(val)=>{
    console.log(val);
    const filteredData=Apiproperties.filter((ele)=>{
        if(ele.likes.length==val||
            ele.area?.toLowerCase().includes(val.toLowerCase())||
            ele.price==val||
            ele.description.toLowerCase().includes(val.toLowerCase())||
            ele.title.toLowerCase().includes(val.toLowerCase()))
            return true
        return false
        })
        setProperties(filteredData)
  }

  return (
    <div>
      <Navbar filter={filter} />
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.map((property) => (
          <Card key={property._id} {...property} />
        ))}
      </div>
    </div>
  );
}
