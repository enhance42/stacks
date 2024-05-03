// Card component to display the card content

import React from 'react';
import './Card.css';

const Card = ({ id, content }) => {
  const dragStart = (event) => {
    const target = event.target;
    event.dataTransfer.setData('card_id', target.id);
    setTimeout(() => {
      target.className = target.className.replace("show", ""); // Remove the "show" class
    }, 0);
  }

  const dragOver = (event) => {
    event.stopPropagation();
  }

  return (
    <div 
      id={id} 
      draggable='true' 
      onDragStart={dragStart} 
      onDragOver={dragOver}
      className="card show" // Add the "show" class
    >
      {content}
    </div>
  );
};

export default Card;