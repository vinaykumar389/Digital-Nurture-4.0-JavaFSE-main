import React from 'react';

function PaymentPage() {
  return (
    <div className="payment-page">
      <h2>Payment</h2>
      <form>
        <input type="text" placeholder="Card Number" /><br />
        <input type="text" placeholder="Expiry Date (MM/YY)" /><br />
        <input type="text" placeholder="CVV" /><br />
        <button type="submit">Pay Now</button>
      </form>
    </div>
  );
}

export default PaymentPage;
