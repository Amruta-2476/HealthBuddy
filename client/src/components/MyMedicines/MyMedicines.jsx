import React from 'react';
import './MyMedicines.css';

const MyMedicines = ({ medicines }) => {
  return (
    <div className="my-medicines">
      <h2>My Medicines</h2>
      <table className="medicine-table">
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
          {medicines.map((medicine, index) => (
            <tr key={index} className="medicine-item">
              <td>{medicine.name}</td>
              <td>{medicine.dosage}</td>
              <td>{medicine.frequency}</td>
              <td>{medicine.startDate}</td>
              <td>{medicine.endDate}</td>
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

export default MyMedicines;
