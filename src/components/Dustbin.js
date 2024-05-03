// src/components/Dustbin.js
import React from 'react';
import './Dustbin.css'; // Import the CSS file

const Dustbin = () => {
  const allowDrop = (event) => {
    event.preventDefault();
  }

  const drop = (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('card_id');
    const card = document.getElementById(cardId);
    const stack = document.querySelector('.stack'); // Get the stack
    card.remove(); // Remove the card
    // Make the top card draggable
    if (stack.children.length > 0) {
      stack.children[stack.children.length - 1].draggable = true;
    }
  }

  return (
    <div 
      onDrop={drop} 
      onDragOver={allowDrop} 
      className="dustbin"
    >
    Destory
    </div>
  );
};

export default Dustbin;