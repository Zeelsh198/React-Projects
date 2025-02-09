import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AppointmentForm.css";

function AppointmentForm({ doctorData }) {
  const [formData, setFormData] = useState({
    patientName: "",
    age: "",
    gender: "",
    doctorName: "",
    date: "",
  });

  const [isDateUnavailable, setIsDateUnavailable] = useState(false);
  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Add 1 to month (0-11)
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }
  const listOfAppoinMent = JSON.parse(localStorage.getItem("appointments"));

  const [bookedDates, setBookesDate] = useState([
    new Date("2025-01-25"),
    new Date("2025-01-29"),
  ]);

  useEffect(() => {
    if (listOfAppoinMent && listOfAppoinMent?.length !== 0) {
      const otherDates = listOfAppoinMent?.map(
        (item) => new Date(formatDate(item.date))
      );
      setBookesDate([...bookedDates, ...otherDates]);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    // Set the date without time (set time to 00:00)
    const newDate = new Date(date.setHours(0, 0, 0, 0));
    setFormData((prevData) => ({
      ...prevData,
      date: newDate,
    }));

    // Check if the selected date is already booked
    const isBooked = bookedDates.some(
      (bookedDate) => formatDate(bookedDate) === formatDate(newDate)
    );
    setIsDateUnavailable(isBooked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save the appointment in localStorage
    const currentAppointments =
      JSON.parse(localStorage.getItem("appointments")) || [];
    const newAppointment = {
      patientName: formData.patientName,
      age: formData.age,
      gender: formData.gender,
      doctorName: formData.doctorName,
      date: formData.date.toISOString(),
    };

    currentAppointments.push(newAppointment);
    localStorage.setItem("appointments", JSON.stringify(currentAppointments));

    alert("Appointment booked successfully!");
    setFormData({
      patientName: "",
      age: "",
      gender: "",
      doctorName: "",
      date: "",
    });
    setBookesDate([...bookedDates, new Date(formatDate(formData.date))]);
  };

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book Your Appointment</h2>
      <div className="form-group">
        <label htmlFor="patientName">Patient Name</label>
        <input
          type="text"
          id="patientName"
          placeholder="Enter Patient Name"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          placeholder="Enter Your Age"
          id="age"
          name="age"
          min={1}
          max={100}
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="doctorName">Doctor</label>
        <select
          id="doctorName"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          required
        >
          <option value="">Select Doctor</option>
          {doctorData.map((doctor) => (
            <option key={doctor.name} value={doctor.name}>
              {doctor.name}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="date">Select Date</label>
        <DatePicker
          selected={formData.date}
          onChange={handleDateChange}
          placeholderText="Please Select Date"
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
          excludeDates={[
    new Date("2025-01-25"),
    new Date("2025-01-29"),
  ]}
          showTimeSelect={false}
        />
        {isDateUnavailable && (
          <div className="unavailable-message">
            <p>This date is unavailable. Please select another date.</p>
          </div>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        disabled={isDateUnavailable}
      >
        Book Appointment
      </button>
    </form>
  );
}

export default AppointmentForm;
