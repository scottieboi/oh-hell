import React from 'react';
import { CardProps } from '../card/Card';
import './Hand.css';
import SingleCard from '../card/SingleCard';

interface HandProps {
  cards: Array<CardProps>
}

function Hand(props: HandProps) {
  return (
    <>
      <h1 className='hand-header'>Your hand</h1>
      <div className='hand-container'>
        {props.cards.map(card => <SingleCard card={card} />)}
      </div>
    </>
  )
}

export default Hand;
