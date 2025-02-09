import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import DoctorInfo from "../components/DoctorInfo";
import { doctorData } from "../data/doctorData";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage-container">
      <AppointmentForm doctorData={doctorData} />
      <h1 className="homepage-title">Meet Our Doctors</h1>
      <div className="row">
        {doctorData.map((doctor, index) => (
          <div key={index} className="col-md-4">
            <DoctorInfo
              name={doctor.name}
              image={doctor.image}
              description={doctor.description}
              specialization={doctor.specialization}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
