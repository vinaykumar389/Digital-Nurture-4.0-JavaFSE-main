import React from 'react';
import './App.css';

import Counter from './components/Counter';
import WelcomeButton from './components/WelcomeButton';
import SyntheticEventButton from './components/SyntheticEventButton';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <div className="App">
      <h1>React Event Examples</h1>

      <div className="component-card">
        <h2>Counter Example</h2>
        <Counter />
      </div>

      <div className="component-card">
        <h2>Welcome Button</h2>
        <WelcomeButton />
      </div>

      <div className="component-card">
        <h2>Synthetic Event Button</h2>
        <SyntheticEventButton />
      </div>

      <div className="component-card">
        <h2>Currency Converter</h2>
        <CurrencyConverter />
      </div>
    </div>
  );
}

export default App;
