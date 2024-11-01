import React, { useState } from 'react';
import './AddCheckup.css';
import checkup_logo from '../Assets/checkup.png';

const AddCheckup = ({ addCheckup }) => {
  const [checkup, setCheckup] = useState({
    name: '',
    doctorName: '',
    cause: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCheckup({ ...checkup, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCheckup(checkup);
    setCheckup({
      name: '',
      doctorName: '',
      cause: '',
      date: '',
      date: ''
    });
  };

  return (
    <div className="checkup-container">
      <img src={checkup_logo} alt="Checkup Illustration" className="checkup-image" />  
    <form onSubmit={handleSubmit} className="add-checkup-form">
      <h2>Add Check-up Schedule</h2>
      <div className="checkup-grid">
        <div>
          <label>Name</label>
          <input type="text" name="name" value={checkup.name} onChange={handleChange} placeholder="Checkup Name" />
        </div>
        <div>
          <label>Doctor's Name</label>
          <input type="text" name="doctorName" value={checkup.doctorName} onChange={handleChange} placeholder="Doctor's Name" />
        </div>
        <div>
          <label>Cause</label>
          <input type="text" name="cause" value={checkup.cause} onChange={handleChange} placeholder="Cause" />
        </div>
        <div>
          <label>Date</label>
        <input type="date" name="date" value={checkup.date} onChange={handleChange} placeholder="Date" />
        </div>
        <div>
          <label>Time</label>
          <input type="time" name="time" value={checkup.time} onChange={handleChange} placeholder="Time" />
        </div>
      </div>
      <button type="submit">Save Checkup</button>
    </form> 
    </div>
  );
};

export default AddCheckup;
