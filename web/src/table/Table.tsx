import React from 'react';
import { getCardAsImage, getCardWidth, getCardHeight } from '../card/Card';
import { getRandomInt } from '../utils/Math';
import CardProps from '../card/CardProps';

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
        ctx.fillStyle = 'rgb(7,99,36)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.save();

        // put in centre
        ctx.translate(canvas.width / 2, canvas.height / 2);

        const cardWidth = getCardWidth();
        const cardHeight = getCardHeight();

        images.forEach(image => {
          ctx.drawImage(image, -(cardWidth / 2), -(cardHeight / 2), cardWidth, cardHeight);
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
  }, [props]);

  return (<canvas
    ref={canvasRef}
    width={window.innerWidth}
    height={getCardHeight() * 1.5}
  />);
}

export default Table;