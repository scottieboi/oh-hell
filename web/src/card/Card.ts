import Suit from './Suit';
import CardNumber from './CardNumber';

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
import CardProps from './CardProps';

/**
 * Default height of card
 */
const CARD_HEIGHT = 200;

/**
 * Default width of card
 */
const CARD_WIDTH = 0.688705 * CARD_HEIGHT;

export function getCardWidth() {
  let width = CARD_WIDTH;

  // Resize cards if on small screen
  const smallScreenCardWidth = window.innerWidth / 4.5;
  if (CARD_WIDTH > smallScreenCardWidth) {
    width = smallScreenCardWidth;
  }

  return width;
}

export function getCardHeight() {
  let height = CARD_HEIGHT;

  // Resize cards if on small screen
  const smallScreenCardWidth = window.innerWidth / 4.5;
  if (CARD_WIDTH > smallScreenCardWidth) {
    height = smallScreenCardWidth * CARD_HEIGHT / CARD_WIDTH;
  }

  return height;
}

export function getCardAsImage(props: CardProps) {
  const img = new Image();

  if (props.suit === Suit.JOKER) {
    img.src = joker;
  } else if (props.suit === Suit.SPADES) {
    switch (props.number) {
      case CardNumber.ACE:
        img.src = aceOfSpades;
        break;
      case CardNumber.TWO:
        img.src = twoOfSpades;
        break;
      case CardNumber.THREE:
        img.src = threeOfSpades;
        break;
      case CardNumber.FOUR:
        img.src = fourOfSpades;
        break;
      case CardNumber.FIVE:
        img.src = fiveOfSpades;
        break;
      case CardNumber.SIX:
        img.src = sixOfSpades;
        break;
      case CardNumber.SEVEN:
        img.src = sevenOfSpades;
        break;
      case CardNumber.EIGHT:
        img.src = eightOfSpades;
        break;
      case CardNumber.NINE:
        img.src = nineOfSpades;
        break;
      case CardNumber.TEN:
        img.src = tenOfSpades;
        break;
      case CardNumber.JACK:
        img.src = jackOfSpades;
        break;
      case CardNumber.QUEEN:
        img.src = queenOfSpades;
        break;
      case CardNumber.KING:
        img.src = kingOfSpades;
        break;
    }
  } else if (props.suit === Suit.DIAMONDS) {
    switch (props.number) {
      case CardNumber.ACE:
        img.src = aceOfDiamonds;
        break;
      case CardNumber.TWO:
        img.src = twoOfDiamonds;
        break;
      case CardNumber.THREE:
        img.src = threeOfDiamonds;
        break;
      case CardNumber.FOUR:
        img.src = fourOfDiamonds;
        break;
      case CardNumber.FIVE:
        img.src = fiveOfDiamonds;
        break;
      case CardNumber.SIX:
        img.src = sixOfDiamonds;
        break;
      case CardNumber.SEVEN:
        img.src = sevenOfDiamonds;
        break;
      case CardNumber.EIGHT:
        img.src = eightOfDiamonds;
        break;
      case CardNumber.NINE:
        img.src = nineOfDiamonds;
        break;
      case CardNumber.TEN:
        img.src = tenOfDiamonds;
        break;
      case CardNumber.JACK:
        img.src = jackOfDiamonds;
        break;
      case CardNumber.QUEEN:
        img.src = queenOfDiamonds;
        break;
      case CardNumber.KING:
        img.src = kingOfDiamonds;
        break;
    }
  } else if (props.suit === Suit.HEARTS) {
    switch (props.number) {
      case CardNumber.ACE:
        img.src = aceOfHearts;
        break;
      case CardNumber.TWO:
        img.src = twoOfHearts;
        break;
      case CardNumber.THREE:
        img.src = threeOfHearts;
        break;
      case CardNumber.FOUR:
        img.src = fourOfHearts;
        break;
      case CardNumber.FIVE:
        img.src = fiveOfHearts;
        break;
      case CardNumber.SIX:
        img.src = sixOfHearts;
        break;
      case CardNumber.SEVEN:
        img.src = sevenOfHearts;
        break;
      case CardNumber.EIGHT:
        img.src = eightOfHearts;
        break;
      case CardNumber.NINE:
        img.src = nineOfHearts;
        break;
      case CardNumber.TEN:
        img.src = tenOfHearts;
        break;
      case CardNumber.JACK:
        img.src = jackOfHearts;
        break;
      case CardNumber.QUEEN:
        img.src = queenOfHearts;
        break;
      case CardNumber.KING:
        img.src = kingOfHearts;
        break;
    }
  } else if (props.suit === Suit.CLUBS) {
    switch (props.number) {
      case CardNumber.ACE:
        img.src = aceOfClubs;
        break;
      case CardNumber.TWO:
        img.src = twoOfClubs;
        break;
      case CardNumber.THREE:
        img.src = threeOfClubs;
        break;
      case CardNumber.FOUR:
        img.src = fourOfClubs;
        break;
      case CardNumber.FIVE:
        img.src = fiveOfClubs;
        break;
      case CardNumber.SIX:
        img.src = sixOfClubs;
        break;
      case CardNumber.SEVEN:
        img.src = sevenOfClubs;
        break;
      case CardNumber.EIGHT:
        img.src = eightOfClubs;
        break;
      case CardNumber.NINE:
        img.src = nineOfClubs;
        break;
      case CardNumber.TEN:
        img.src = tenOfClubs;
        break;
      case CardNumber.JACK:
        img.src = jackOfClubs;
        break;
      case CardNumber.QUEEN:
        img.src = queenOfClubs;
        break;
      case CardNumber.KING:
        img.src = kingOfClubs;
        break;
    }
  }

  return img;
}
