import React from 'react';
import { CardProps, getCardAsImage, CARD_WIDTH, CARD_HEIGHT } from './Card';

interface SingleCardProps {
  card: CardProps,
  height?: number,
  width?: number
}

function SingleCard(props: SingleCardProps) {
  const img = getCardAsImage(props.card);

  let width: number;
  let height: number;

  if (props.width) {
    width = props.width;
    height = props.width * CARD_HEIGHT / CARD_WIDTH;
  } else if (props.height) {
    width = props.height * CARD_WIDTH / CARD_HEIGHT;
    height = props.height;
  } else {
    width = CARD_WIDTH;
    height = CARD_HEIGHT;
  }

  if (img) {
    return (<img src={img.src} width={width} height={height} alt="Playing card" />);
  }

  return null;
}

export default SingleCard;
