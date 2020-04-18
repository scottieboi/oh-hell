import React from 'react';
import './App.css';
import Suits from './card/Suits';
import Table from './table/Table';

function App() {
  return (
    <Table cards={[
      { suit: Suits.JOKER },
      { suit: Suits.JOKER },
      { suit: Suits.JOKER }
    ]} />
  );
}

export default App;
