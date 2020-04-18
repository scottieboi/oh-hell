import React from 'react';
import Suit from './card/Suit';
import Table from './table/Table';
import Hand from './hand/Hand';

function App() {
  return (
    <>
      <Table cards={[
        { suit: Suit.JOKER },
        { suit: Suit.JOKER },
        { suit: Suit.JOKER },
      ]} />
      <Hand cards={[
        { suit: Suit.JOKER },
        { suit: Suit.JOKER },
        { suit: Suit.JOKER },
        { suit: Suit.JOKER },
        { suit: Suit.JOKER },
        { suit: Suit.JOKER },
        { suit: Suit.JOKER },
      ]} />
    </>
  );
}

export default App;
