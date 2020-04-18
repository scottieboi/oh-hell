import React from 'react';
import Suits from './card/Suits';
import Table from './table/Table';
import Hand from './hand/Hand';

function App() {
  return (
    <>
      <Table cards={[
        { suit: Suits.JOKER },
        { suit: Suits.JOKER },
        { suit: Suits.JOKER },
      ]} />
      <Hand cards={[
        { suit: Suits.JOKER },
        { suit: Suits.JOKER },
        { suit: Suits.JOKER },
        { suit: Suits.JOKER },
        { suit: Suits.JOKER },
        { suit: Suits.JOKER },
        { suit: Suits.JOKER },
      ]} />
    </>
  );
}

export default App;
