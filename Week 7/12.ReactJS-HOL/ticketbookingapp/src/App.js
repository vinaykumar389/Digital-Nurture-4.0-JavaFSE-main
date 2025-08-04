import React from 'react';
import './App.css';
import LoginControl from './components/LoginControl';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      <h1>✈️ Ticket Booking App</h1>
      <p>Book your flight tickets quickly and securely!</p>
      <LoginControl />
    </div>
  );
}

export default App;
