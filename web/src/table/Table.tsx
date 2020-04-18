import React from 'react';
import { CardProps, CARD_HEIGHT, CARD_WIDTH, getCardAsImage } from '../card/Card';
import { getRandomInt } from '../utils/Math';

interface TableProps {
  cards: Array<CardProps>
}

function drawCardsToCanvas(cards: Array<CardProps>, canvasRef: React.RefObject<HTMLCanvasElement>) {
  const draw = () => {
    if (canvasRef && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        // save the current ctx (unrotated or translated)
        ctx.save();

        // put in centre
        ctx.translate(canvas.width / 2, canvas.height / 2);

        images.forEach(image => {
          ctx.drawImage(image, -(CARD_WIDTH / 2), -(CARD_HEIGHT / 2), CARD_WIDTH, CARD_HEIGHT);
          ctx.rotate(getRandomInt(15, 30) * Math.PI / 180);
        });
        
        ctx.restore();
      }
    }
  };
  
  const images = cards.map(card => getCardAsImage(card));
  
  // Wait for all images to load
  let imgLoadCount = 0;
  images.forEach(img => {
    img.onload = () => {
      imgLoadCount++;
      if (imgLoadCount === images.length) {
        draw();
      }
    };
  });
}

function Table(props: TableProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    drawCardsToCanvas(props.cards, canvasRef);
  });

  return (<canvas
    ref={canvasRef}
    width={window.innerWidth}
    height={CARD_HEIGHT * 2}
  />);
}

export default Table;