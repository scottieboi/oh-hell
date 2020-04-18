import React from 'react';
import Card from './card/Card';
import './App.css';
import Suits from './card/Suits';
import CardNumbers from './card/CardNumbers';

function App() {
  return (
    <div className="App">
      <Card suit={Suits.HEARTS} number={CardNumbers.FIVE} />
    </div>
  );
}

export default App;
