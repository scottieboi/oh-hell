import React from 'react';
import './Hand.css';
import SingleCard from '../card/SingleCard';
import CardProps from '../card/CardProps';

interface HandProps {
  cards: Array<CardProps>
}

function Hand(props: HandProps) {
  return (
    <>
      <h1 className='hand-header'>Your hand</h1>
      <div className='hand-container'>
        {props.cards.map(card => <SingleCard suit={card.suit} number={card.number} />)}
      </div>
    </>
  )
}

export default Hand;
