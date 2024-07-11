// src/components/PrescriptionList.js
import React from 'react';

const PrescriptionList = () => {
  // Mock data for prescriptions
  const prescriptions = [
    { id: 1, patientName: 'John Doe', medication: 'Med1', dosage: '10mg', frequency: 'Daily' },
    { id: 2, patientName: 'Jane Smith', medication: 'Med2', dosage: '5mg', frequency: 'Twice a day' },
  ];

  return (
    <div>
      <h2>Prescription List</h2>
      <ul>
        {prescriptions.map((prescription) => (
          <li key={prescription.id}>
            {prescription.patientName}: {prescription.medication}, {prescription.dosage}, {prescription.frequency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PrescriptionList;