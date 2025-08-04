import React from 'react';

function BookingPage({ selectedFlight, onProceedToPayment }) {
  return (
    <div className="booking-page">
      <h2>Booking Details</h2>
      <p>Flight: {selectedFlight.from} → {selectedFlight.to}</p>
      <p>Price: ₹{selectedFlight.price}</p>
      <button onClick={onProceedToPayment}>Proceed to Payment</button>
    </div>
  );
}

export default BookingPage;
