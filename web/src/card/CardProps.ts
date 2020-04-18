import Suits from "./Suits";
import CardNumbers from "./CardNumbers";

export default interface CardProps {
  suit: Suits,
  number?: CardNumbers
}
