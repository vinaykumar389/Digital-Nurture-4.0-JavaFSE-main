import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState('home');
  const [selectedFlight, setSelectedFlight] = useState(null);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setPage('home');
  };

  const handleBookFlight = (flight) => {
    setSelectedFlight(flight);
    setPage('booking');
  };

  const handleProceedToPayment = () => setPage('payment');

  let content;
  if (!isLoggedIn) {
    content = <GuestPage />;
  } else if (page === 'home') {
    content = <UserPage onBookFlight={handleBookFlight} />;
  } else if (page === 'booking') {
    content = <BookingPage selectedFlight={selectedFlight} onProceedToPayment={handleProceedToPayment} />;
  } else if (page === 'payment') {
    content = <PaymentPage />;
  }

  return (
    <div>
      {isLoggedIn
        ? <button onClick={handleLogoutClick}>Logout</button>
        : <button onClick={handleLoginClick}>Login</button>}
      {content}
    </div>
  );
}

export default LoginControl;
