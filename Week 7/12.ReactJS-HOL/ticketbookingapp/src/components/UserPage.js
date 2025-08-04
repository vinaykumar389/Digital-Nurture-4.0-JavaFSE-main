import React from 'react';
import FlightList from './FlightList';

function UserPage({ onBookFlight }) {
  return (
    <div>
      <h2>Welcome, User!</h2>
      <FlightList onBook={onBookFlight} />
    </div>
  );
}

export default UserPage;
