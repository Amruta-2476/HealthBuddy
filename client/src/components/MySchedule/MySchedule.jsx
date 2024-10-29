import React from 'react';
import './MySchedule.css';

const MySchedule = ({ checkups }) => {
  return (
    <div className="my-schedule">
      <h2>My Schedule</h2>
 <table className="checkup-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Dosage</th>
            <th>Frequency</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {checkups.map((checkup, index) => (
            <tr key={index} className="checkup-item">
              <td>{checkup.name}</td>
              <td>{checkup.dosage}</td>
              <td>{checkup.frequency}</td>
              <td>{checkup.startDate}</td>
              <td>{checkup.endDate}</td>
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
