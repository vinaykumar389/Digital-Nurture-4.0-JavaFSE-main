import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const converted = (parseFloat(rupees) / 90).toFixed(2); // Example: 1 EUR = ₹90
    setEuro(converted);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter amount in ₹"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>Converted Amount: €{euro}</p>}
    </div>
  );
}

export default CurrencyConverter;
