import React, { useEffect, useState } from 'react';
import './ApiData.css'; // Optional: Add CSS for better styling

export const ApiData = () => {
  const [data, setData] = useState([]);

  // Function to fetch API data
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        console.log(json); // Log the fetched data
        setData(json); // Store data in the state
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this runs once after the component mounts

  return (
    <div className="api-container">
     
      <div className="product-list">
        {data.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-detailss">
              <h2>{product.title}</h2>
              <p><strong>Price:</strong> ₹{product.price}</p>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
