import React, { useState } from 'react';

const ComplaintRegister = () => {
  const [name, setName] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const referenceNumber = Math.floor(100000 + Math.random() * 900000);
    alert(`Complaint submitted by ${name}.\nReference Number: ${referenceNumber}`);
    setName('');
    setComplaint('');
  };

  return (
    <div className="complaint-form">
      <h2>Raise a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Employee Name:</label><br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
        </div>
        <div style={{ marginTop: '1rem' }}>
          <label>Complaint:</label><br />
          <textarea
            value={complaint}
            onChange={(e) => setComplaint(e.target.value)}
            required
            rows="5"
            placeholder="Enter your complaint"
          />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Submit</button>
      </form>
    </div>
  );
};

export default ComplaintRegister;
