import React from 'react';
import './MySchedule.css';

const MySchedule = ({ checkups }) => {
  return (
    <div className="my-schedule">
      <h2>My Schedule</h2>
      {checkups.map((checkup, index) => (
        <div key={index} className="checkup-item">
          <p>{checkup.name} - {checkup.cause}</p>
          <p>{checkup.date} at {checkup.time}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MySchedule;
