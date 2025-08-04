import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import './App.css';

function OfficeDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const office = location.state;

  if (!office) {
    return <div>Office not found</div>;
  }

  return (
    <div className="App office-details-bg">
      <h1>{office.name}</h1>
      <img
        src={office.image}
        alt={office.name}
        style={{ width: '40%', borderRadius: '10px', marginBottom: '20px' }}
      />
      <p><strong>Address:</strong> {office.address}</p>
      <p><strong>Rent:</strong> ₹{office.rent}</p>

      <div style={{ marginTop: '30px' }}>
        <button
          onClick={() => navigate(-1)}
          style={{ marginRight: '20px', padding: '10px 20px', fontSize: '16px' }}
        >
          🔙 Back
        </button>

        <Link to="/payment" state={office}>
          <button
            style={{
              padding: '14px 40px',
              fontSize: '18px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            💳 Proceed to Payment
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OfficeDetails;
