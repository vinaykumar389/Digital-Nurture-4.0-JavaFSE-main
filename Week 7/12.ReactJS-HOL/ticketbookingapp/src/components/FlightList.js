import React from 'react';

const flights = [
  { id: 1, from: 'Delhi', to: 'Mumbai', price: 3000 },
  { id: 2, from: 'Hyderabad', to: 'Chennai', price: 2500 },
  { id: 3, from: 'Bangalore', to: 'Kolkata', price: 4000 },
];

function FlightList({ onBook }) {
  return (
    <div className="card-container">
      {flights.map(flight => (
        <div className="card" key={flight.id}>
          <h3>{flight.from} → {flight.to}</h3>
          <p>Price: ₹{flight.price}</p>
          <button onClick={() => onBook(flight)}>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default FlightList;
