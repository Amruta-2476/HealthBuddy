import React, { useState } from 'react';
import './Reminders.css';
import medicine_logo from '../Assets/medicine.png';

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
    <div className="reminders-container">
      <form onSubmit={handleSubmit} className="reminders-form">
        <h2>Add Medicine</h2>
        <div className="form-grid">
          <div>
            <label>Name</label>
            <input type="text" name="name" value={medicine.name} onChange={handleChange} placeholder="Medicine Name" />
          </div>
          <div>
            <label>Frequency</label>
            <input type="text" name="frequency" value={medicine.frequency} onChange={handleChange} placeholder="Frequency" />
          </div>
          <div>
            <label>Dosage</label>
            <input type="text" name="dosage" value={medicine.dosage} onChange={handleChange} placeholder="Dosage" />
          </div>
          <div>
            <label>Start Date</label>
            <input type="date" name="startDate" value={medicine.startDate} onChange={handleChange} />
          </div>
          <div>
            <label>End Date</label>
            <input type="date" name="endDate" value={medicine.endDate} onChange={handleChange} />
          </div>
          <div>
            <label>Time</label>
            <input type="time" name="time" value={medicine.time} onChange={handleChange} />
          </div>
          <div>
            <label>Repeat</label>
            <select name="repeat" value={medicine.repeat} onChange={handleChange}>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>
        </div>
        <button type="submit">Save Reminder</button>
      </form>
      <img src={medicine_logo} alt="Reminder Illustration" className="reminder-image" />
    </div>
  );
};

export default Reminders;
