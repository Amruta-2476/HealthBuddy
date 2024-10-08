import React from 'react';
import './MyMedicines.css';

const MyMedicines = ({ medicines }) => {
  return (
    <div className="my-medicines">
      <h2>My Medicines</h2>
      {medicines.map((medicine, index) => (
        <div key={index} className="medicine-item">
          <p>{medicine.name} - {medicine.dosage} ({medicine.frequency})</p>
          <p>{medicine.startDate} to {medicine.endDate}</p>
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MyMedicines;
