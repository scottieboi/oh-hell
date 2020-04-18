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

export interface CardProps {
  suit: Suits,
  number?: CardNumbers
}

export const CARD_HEIGHT = 200;
export const CARD_WIDTH = 0.688705 * CARD_HEIGHT;

export function getCardAsImage(props: CardProps) {
  const img = new Image();

  if (props.suit === Suits.JOKER) {
    img.src = joker;
  } else if (props.suit === Suits.SPADES) {
    switch (props.number) {
      case CardNumbers.ACE:
        img.src = aceOfSpades;
        break;
      case CardNumbers.TWO:
        img.src = twoOfSpades;
        break;
      case CardNumbers.THREE:
        img.src = threeOfSpades;
        break;
      case CardNumbers.FOUR:
        img.src = fourOfSpades;
        break;
      case CardNumbers.FIVE:
        img.src = fiveOfSpades;
        break;
      case CardNumbers.SIX:
        img.src = sixOfSpades;
        break;
      case CardNumbers.SEVEN:
        img.src = sevenOfSpades;
        break;
      case CardNumbers.EIGHT:
        img.src = eightOfSpades;
        break;
      case CardNumbers.NINE:
        img.src = nineOfSpades;
        break;
      case CardNumbers.TEN:
        img.src = tenOfSpades;
        break;
      case CardNumbers.JACK:
        img.src = jackOfSpades;
        break;
      case CardNumbers.QUEEN:
        img.src = queenOfSpades;
        break;
      case CardNumbers.KING:
        img.src = kingOfSpades;
        break;
    }
  } else if (props.suit === Suits.DIAMONDS) {
    switch (props.number) {
      case CardNumbers.ACE:
        img.src = aceOfDiamonds;
        break;
      case CardNumbers.TWO:
        img.src = twoOfDiamonds;
        break;
      case CardNumbers.THREE:
        img.src = threeOfDiamonds;
        break;
      case CardNumbers.FOUR:
        img.src = fourOfDiamonds;
        break;
      case CardNumbers.FIVE:
        img.src = fiveOfDiamonds;
        break;
      case CardNumbers.SIX:
        img.src = sixOfDiamonds;
        break;
      case CardNumbers.SEVEN:
        img.src = sevenOfDiamonds;
        break;
      case CardNumbers.EIGHT:
        img.src = eightOfDiamonds;
        break;
      case CardNumbers.NINE:
        img.src = nineOfDiamonds;
        break;
      case CardNumbers.TEN:
        img.src = tenOfDiamonds;
        break;
      case CardNumbers.JACK:
        img.src = jackOfDiamonds;
        break;
      case CardNumbers.QUEEN:
        img.src = queenOfDiamonds;
        break;
      case CardNumbers.KING:
        img.src = kingOfDiamonds;
        break;
    }
  } else if (props.suit === Suits.HEARTS) {
    switch (props.number) {
      case CardNumbers.ACE:
        img.src = aceOfHearts;
        break;
      case CardNumbers.TWO:
        img.src = twoOfHearts;
        break;
      case CardNumbers.THREE:
        img.src = threeOfHearts;
        break;
      case CardNumbers.FOUR:
        img.src = fourOfHearts;
        break;
      case CardNumbers.FIVE:
        img.src = fiveOfHearts;
        break;
      case CardNumbers.SIX:
        img.src = sixOfHearts;
        break;
      case CardNumbers.SEVEN:
        img.src = sevenOfHearts;
        break;
      case CardNumbers.EIGHT:
        img.src = eightOfHearts;
        break;
      case CardNumbers.NINE:
        img.src = nineOfHearts;
        break;
      case CardNumbers.TEN:
        img.src = tenOfHearts;
        break;
      case CardNumbers.JACK:
        img.src = jackOfHearts;
        break;
      case CardNumbers.QUEEN:
        img.src = queenOfHearts;
        break;
      case CardNumbers.KING:
        img.src = kingOfHearts;
        break;
    }
  } else if (props.suit === Suits.CLUBS) {
    switch (props.number) {
      case CardNumbers.ACE:
        img.src = aceOfClubs;
        break;
      case CardNumbers.TWO:
        img.src = twoOfClubs;
        break;
      case CardNumbers.THREE:
        img.src = threeOfClubs;
        break;
      case CardNumbers.FOUR:
        img.src = fourOfClubs;
        break;
      case CardNumbers.FIVE:
        img.src = fiveOfClubs;
        break;
      case CardNumbers.SIX:
        img.src = sixOfClubs;
        break;
      case CardNumbers.SEVEN:
        img.src = sevenOfClubs;
        break;
      case CardNumbers.EIGHT:
        img.src = eightOfClubs;
        break;
      case CardNumbers.NINE:
        img.src = nineOfClubs;
        break;
      case CardNumbers.TEN:
        img.src = tenOfClubs;
        break;
      case CardNumbers.JACK:
        img.src = jackOfClubs;
        break;
      case CardNumbers.QUEEN:
        img.src = queenOfClubs;
        break;
      case CardNumbers.KING:
        img.src = kingOfClubs;
        break;
    }
  }

  return img;
}

function Card(props: CardProps) {
  const img = getCardAsImage(props);

  if (img) {
    return (<img src={img.src} alt="Playing card" />);
  }

  return null;
}

export default Card;
