import React from 'react';

function WelcomeButton() {
  const showMessage = (message) => {
    alert(`Message: ${message}`);
  };

  return (
    <button onClick={() => showMessage("Welcome")}>Say Welcome</button>
  );
}

export default WelcomeButton;
