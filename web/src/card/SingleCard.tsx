import React from 'react';
import { getCardAsImage, getCardWidth, getCardHeight } from './Card';
import CardProps from './CardProps';

function SingleCard(props: CardProps) {
  const img = getCardAsImage(props);

  if (img) {
    return (<img src={img.src} width={getCardWidth()} height={getCardHeight()} alt="Playing card" />);
  }

  return null;
}

export default SingleCard;
