import Suit from './Suit';
import CardNumber from './CardNumber';

export default interface CardProps {
  suit: Suit,
  number?: CardNumber
}
