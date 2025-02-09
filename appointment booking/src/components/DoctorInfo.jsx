import React from 'react';
import './DoctorInfo.css';

function DoctorInfo({ name, image, description, specialization }) {
  return (
    <div className="doctor-card">
      <img src={image} alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <span className="specialization">{specialization}</span>
      </div>
    </div>
  );
}

export default DoctorInfo;
