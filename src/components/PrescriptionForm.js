// src/components/PrescriptionForm.js
import React, { useState } from 'react';

const PrescriptionForm = () => {
  const [patientName, setPatientName] = useState('');
  const [medication, setMedication] = useState('');
  const [dosage, setDosage] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle prescription submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Enter Prescription</h2>
      <label>Patient Name:</label>
      <input
        type="text"
        value={patientName}
        onChange={(e) => setPatientName(e.target.value)}
      />
      <label>Medication:</label>
      <input
        type="text"
        value={medication}
        onChange={(e) => setMedication(e.target.value)}
      />
      <label>Dosage:</label>
      <input
        type="text"
        value={dosage}
        onChange={(e) => setDosage(e.target.value)}
      />
      <label>Frequency:</label>
      <input
        type="text"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PrescriptionForm;
