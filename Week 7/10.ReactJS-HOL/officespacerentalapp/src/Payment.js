import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.css';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const office = location.state;

  if (!office) {
    return <div>Office not found for payment</div>;
  }

  const handlePayment = () => {
    alert("Payment successful for " + office.name + "!");
    navigate("/");
  };

  return (
    <div className="App">
      <h1>Payment for {office.name}</h1>
      <img src={office.image} alt={office.name} style={{ width: '50%', borderRadius: '10px' }} />
      <p><strong>Address:</strong> {office.address}</p>
      <p><strong>Total Rent:</strong> ₹{office.rent}</p>
      <button onClick={handlePayment} style={{ marginTop: '20px' }}>✅ Pay Now</button>
    </div>
  );
}

export default Payment;
