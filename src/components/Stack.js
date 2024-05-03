// Stack Logic

import React, { useState } from 'react';
import './Stack.css'; // Import the CSS file


const Stack = () => {
  const [cards, setCards] = useState([]);

  const allowDrop = (event) => {
    event.preventDefault();
  }

  const drop = (event) => {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('card_id');
    const card = document.getElementById(cardId);
    card.className += " animate"; // Add the "show" class
    event.target.appendChild(card);

    card.draggable = true;
    const stack = document.querySelector('.stack');
    if (stack.children.length > 1) {
      stack.children[stack.children.length - 2].draggable = false;
    }
}

  return (
    <div 
      onDrop={drop} 
      onDragOver={allowDrop} 
      className="stack"
    >
      {cards.map((card, index) => (
        <div key={card.id} className="stacked-card" style={{ top: 5 + index * 30 }}>
          <h2>{card.title}</h2>
          <p>{card.content}</p>
          {JSON.stringify(card)}
        </div>
      ))}
    </div>
  );
};

export default Stack;