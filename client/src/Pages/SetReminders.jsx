import React, { useState } from 'react';
import Reminders from '../components/Reminders/Reminders';
import MyMedicines from '../components/MyMedicines/MyMedicines';
import AddCheckup from '../components/AddCheckup/AddCheckup';
import MySchedule from '../components/MySchedule/MySchedule';
import Calendar from '../components/Calendar/Calendar';
import './CSS/SetReminders.css';

const SetReminders = () => {
  const [medicines, setMedicines] = useState([]);
  const [checkups, setCheckups] = useState([]);

  const addMedicine = (medicine) => {
    setMedicines([...medicines, medicine]);
  };

  const addCheckup = (checkup) => {
    setCheckups([...checkups, checkup]);
  };

  return (
    <div className="my-reminders">
      <Reminders addMedicine={addMedicine} />
      <MyMedicines medicines={medicines} />
      <AddCheckup addCheckup={addCheckup} />
      <MySchedule checkups={checkups} />
      {/* <Calendar /> */}
    </div>
  );
};

export default SetReminders;
