import React from 'react';
import Suits from './Suits';
import CardNumbers from './CardNumbers';

import joker from '../img/cards/joker.svg';
import aceOfSpades from '../img/cards/ace_of_spades.svg';
import twoOfSpades from '../img/cards/2_of_spades.svg';
import threeOfSpades from '../img/cards/3_of_spades.svg';
import fourOfSpades from '../img/cards/4_of_spades.svg';
import fiveOfSpades from '../img/cards/5_of_spades.svg';
import sixOfSpades from '../img/cards/6_of_spades.svg';
import sevenOfSpades from '../img/cards/7_of_spades.svg';
import eightOfSpades from '../img/cards/8_of_spades.svg';
import nineOfSpades from '../img/cards/9_of_spades.svg';
import tenOfSpades from '../img/cards/10_of_spades.svg';
import jackOfSpades from '../img/cards/jack_of_spades.svg';
import queenOfSpades from '../img/cards/queen_of_spades.svg';
import kingOfSpades from '../img/cards/king_of_spades.svg';
import aceOfDiamonds from '../img/cards/ace_of_diamonds.svg';
import twoOfDiamonds from '../img/cards/2_of_diamonds.svg';
import threeOfDiamonds from '../img/cards/3_of_diamonds.svg';
import fourOfDiamonds from '../img/cards/4_of_diamonds.svg';
import fiveOfDiamonds from '../img/cards/5_of_diamonds.svg';
import sixOfDiamonds from '../img/cards/6_of_diamonds.svg';
import sevenOfDiamonds from '../img/cards/7_of_diamonds.svg';
import eightOfDiamonds from '../img/cards/8_of_diamonds.svg';
import nineOfDiamonds from '../img/cards/9_of_diamonds.svg';
import tenOfDiamonds from '../img/cards/10_of_diamonds.svg';
import jackOfDiamonds from '../img/cards/jack_of_diamonds.svg';
import queenOfDiamonds from '../img/cards/queen_of_diamonds.svg';
import kingOfDiamonds from '../img/cards/king_of_diamonds.svg';
import aceOfHearts from '../img/cards/ace_of_hearts.svg';
import twoOfHearts from '../img/cards/2_of_hearts.svg';
import threeOfHearts from '../img/cards/3_of_hearts.svg';
import fourOfHearts from '../img/cards/4_of_hearts.svg';
import fiveOfHearts from '../img/cards/5_of_hearts.svg';
import sixOfHearts from '../img/cards/6_of_hearts.svg';
import sevenOfHearts from '../img/cards/7_of_hearts.svg';
import eightOfHearts from '../img/cards/8_of_hearts.svg';
import nineOfHearts from '../img/cards/9_of_hearts.svg';
import tenOfHearts from '../img/cards/10_of_hearts.svg';
import jackOfHearts from '../img/cards/jack_of_hearts.svg';
import queenOfHearts from '../img/cards/queen_of_hearts.svg';
import kingOfHearts from '../img/cards/king_of_hearts.svg';
import aceOfClubs from '../img/cards/ace_of_clubs.svg';
import twoOfClubs from '../img/cards/2_of_clubs.svg';
import threeOfClubs from '../img/cards/3_of_clubs.svg';
import fourOfClubs from '../img/cards/4_of_clubs.svg';
import fiveOfClubs from '../img/cards/5_of_clubs.svg';
import sixOfClubs from '../img/cards/6_of_clubs.svg';
import sevenOfClubs from '../img/cards/7_of_clubs.svg';
import eightOfClubs from '../img/cards/8_of_clubs.svg';
import nineOfClubs from '../img/cards/9_of_clubs.svg';
import tenOfClubs from '../img/cards/10_of_clubs.svg';
import jackOfClubs from '../img/cards/jack_of_clubs.svg';
import queenOfClubs from '../img/cards/queen_of_clubs.svg';
import kingOfClubs from '../img/cards/king_of_clubs.svg';

interface CardProps {
  suit: Suits,
  number?: CardNumbers
}

function Card(props: CardProps) {
  if (props.suit === Suits.JOKER) {
    return (<img src={joker} className='Card' alt="" />);
  }

  if (props.suit === Suits.SPADES) {
    switch (props.number) {
      case CardNumbers.ACE:
        return (<img src={aceOfSpades} className='Card' alt="" />);
      case CardNumbers.TWO:
        return (<img src={twoOfSpades} className='Card' alt="" />);
      case CardNumbers.THREE:
        return (<img src={threeOfSpades} className='Card' alt="" />);
      case CardNumbers.FOUR:
        return (<img src={fourOfSpades} className='Card' alt="" />);
      case CardNumbers.FIVE:
        return (<img src={fiveOfSpades} className='Card' alt="" />);
      case CardNumbers.SIX:
        return (<img src={sixOfSpades} className='Card' alt="" />);
      case CardNumbers.SEVEN:
        return (<img src={sevenOfSpades} className='Card' alt="" />);
      case CardNumbers.EIGHT:
        return (<img src={eightOfSpades} className='Card' alt="" />);
      case CardNumbers.NINE:
        return (<img src={nineOfSpades} className='Card' alt="" />);
      case CardNumbers.TEN:
        return (<img src={tenOfSpades} className='Card' alt="" />);
      case CardNumbers.JACK:
        return (<img src={jackOfSpades} className='Card' alt="" />);
      case CardNumbers.QUEEN:
        return (<img src={queenOfSpades} className='Card' alt="" />);
      case CardNumbers.KING:
        return (<img src={kingOfSpades} className='Card' alt="" />);
    }
  }

  if (props.suit === Suits.DIAMONDS) {
    switch (props.number) {
      case CardNumbers.ACE:
        return (<img src={aceOfDiamonds} className='Card' alt="" />);
      case CardNumbers.TWO:
        return (<img src={twoOfDiamonds} className='Card' alt="" />);
      case CardNumbers.THREE:
        return (<img src={threeOfDiamonds} className='Card' alt="" />);
      case CardNumbers.FOUR:
        return (<img src={fourOfDiamonds} className='Card' alt="" />);
      case CardNumbers.FIVE:
        return (<img src={fiveOfDiamonds} className='Card' alt="" />);
      case CardNumbers.SIX:
        return (<img src={sixOfDiamonds} className='Card' alt="" />);
      case CardNumbers.SEVEN:
        return (<img src={sevenOfDiamonds} className='Card' alt="" />);
      case CardNumbers.EIGHT:
        return (<img src={eightOfDiamonds} className='Card' alt="" />);
      case CardNumbers.NINE:
        return (<img src={nineOfDiamonds} className='Card' alt="" />);
      case CardNumbers.TEN:
        return (<img src={tenOfDiamonds} className='Card' alt="" />);
      case CardNumbers.JACK:
        return (<img src={jackOfDiamonds} className='Card' alt="" />);
      case CardNumbers.QUEEN:
        return (<img src={queenOfDiamonds} className='Card' alt="" />);
      case CardNumbers.KING:
        return (<img src={kingOfDiamonds} className='Card' alt="" />);
    }
  }

  if (props.suit === Suits.HEARTS) {
    switch (props.number) {
      case CardNumbers.ACE:
        return (<img src={aceOfHearts} className='Card' alt="" />);
      case CardNumbers.TWO:
        return (<img src={twoOfHearts} className='Card' alt="" />);
      case CardNumbers.THREE:
        return (<img src={threeOfHearts} className='Card' alt="" />);
      case CardNumbers.FOUR:
        return (<img src={fourOfHearts} className='Card' alt="" />);
      case CardNumbers.FIVE:
        return (<img src={fiveOfHearts} className='Card' alt="" />);
      case CardNumbers.SIX:
        return (<img src={sixOfHearts} className='Card' alt="" />);
      case CardNumbers.SEVEN:
        return (<img src={sevenOfHearts} className='Card' alt="" />);
      case CardNumbers.EIGHT:
        return (<img src={eightOfHearts} className='Card' alt="" />);
      case CardNumbers.NINE:
        return (<img src={nineOfHearts} className='Card' alt="" />);
      case CardNumbers.TEN:
        return (<img src={tenOfHearts} className='Card' alt="" />);
      case CardNumbers.JACK:
        return (<img src={jackOfHearts} className='Card' alt="" />);
      case CardNumbers.QUEEN:
        return (<img src={queenOfHearts} className='Card' alt="" />);
      case CardNumbers.KING:
        return (<img src={kingOfHearts} className='Card' alt="" />);
    }
  }

  if (props.suit === Suits.CLUBS) {
    switch (props.number) {
      case CardNumbers.ACE:
        return (<img src={aceOfClubs} className='Card' alt="" />);
      case CardNumbers.TWO:
        return (<img src={twoOfClubs} className='Card' alt="" />);
      case CardNumbers.THREE:
        return (<img src={threeOfClubs} className='Card' alt="" />);
      case CardNumbers.FOUR:
        return (<img src={fourOfClubs} className='Card' alt="" />);
      case CardNumbers.FIVE:
        return (<img src={fiveOfClubs} className='Card' alt="" />);
      case CardNumbers.SIX:
        return (<img src={sixOfClubs} className='Card' alt="" />);
      case CardNumbers.SEVEN:
        return (<img src={sevenOfClubs} className='Card' alt="" />);
      case CardNumbers.EIGHT:
        return (<img src={eightOfClubs} className='Card' alt="" />);
      case CardNumbers.NINE:
        return (<img src={nineOfClubs} className='Card' alt="" />);
      case CardNumbers.TEN:
        return (<img src={tenOfClubs} className='Card' alt="" />);
      case CardNumbers.JACK:
        return (<img src={jackOfClubs} className='Card' alt="" />);
      case CardNumbers.QUEEN:
        return (<img src={queenOfClubs} className='Card' alt="" />);
      case CardNumbers.KING:
        return (<img src={kingOfClubs} className='Card' alt="" />);
    }
  }

  return null;
}

export default Card;
