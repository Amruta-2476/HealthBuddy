import React from 'react';
import './MySchedule.css';

const MySchedule = ({ checkups }) => {
  return (
    <div className="my-schedule">
      <h2>My Schedule</h2>
 <table className="checkup-table">
        <thead>
          <tr>
            <th>Checkup</th>
            <th>Doctor</th>
            <th>Cause</th>
            <th>Date</th>
            <th>Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {checkups.map((checkup, index) => (
            <tr key={index} className="checkup-item">
              <td>{checkup.name}</td>
              <td>{checkup.doctorName}</td>
              <td>{checkup.cause}</td>
              <td>{checkup.date}</td>
              <td>{checkup.time}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySchedule;
