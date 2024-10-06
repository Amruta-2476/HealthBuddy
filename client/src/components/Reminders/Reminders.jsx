import React, { useState } from 'react';
import './Reminders.css';

const Reminders = ({ addMedicine }) => {
  const [medicine, setMedicine] = useState({
    name: '',
    frequency: '',
    dosage: '',
    startDate: '',
    endDate: '',
    repeat: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicine({ ...medicine, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMedicine(medicine);
    setMedicine({
      name: '',
      frequency: '',
      dosage: '',
      startDate: '',
      endDate: '',
      repeat: '',
      time: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="reminders-form">
      <input type="text" name="name" value={medicine.name} onChange={handleChange} placeholder="Medicine Name" />
      <input type="text" name="frequency" value={medicine.frequency} onChange={handleChange} placeholder="Frequency" />
      <input type="text" name="dosage" value={medicine.dosage} onChange={handleChange} placeholder="Dosage" />
      <input type="date" name="startDate" value={medicine.startDate} onChange={handleChange} placeholder="Start Date" />
      <input type="date" name="endDate" value={medicine.endDate} onChange={handleChange} placeholder="End Date" />
      <input type="time" name="time" value={medicine.time} onChange={handleChange} placeholder="Time" />
      <select name="repeat" value={medicine.repeat} onChange={handleChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
      </select>
      <button type="submit">Save Reminder</button>
    </form>
  );
};

export default Reminders;
