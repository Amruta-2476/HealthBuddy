import React, { useState } from 'react';
import './AddCheckup.css';

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
      time: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-checkup-form">
      <input type="text" name="name" value={checkup.name} onChange={handleChange} placeholder="Checkup Name" />
      <input type="text" name="doctorName" value={checkup.doctorName} onChange={handleChange} placeholder="Doctor's Name" />
      <input type="text" name="cause" value={checkup.cause} onChange={handleChange} placeholder="Cause" />
      <input type="date" name="date" value={checkup.date} onChange={handleChange} placeholder="Date" />
      <input type="time" name="time" value={checkup.time} onChange={handleChange} placeholder="Time" />
      <button type="submit">Save Checkup</button>
    </form>
  );
};

export default AddCheckup;
