// src/App.js
import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Card from './components/Card';
import Stack from './components/Stack';
import './App.css';
import 'animate.css';
import Dustbin from './components/Dustbin';

function App() {
  const [cards, setCards] = useState([]);
  const [newCardContent, setNewCardContent] = useState('');

  const handleAddCard = () => {
    const newCard = {
      id: cards.length + 1,
      content: '',
      isNew: true,  // Flag to indicate it's a new card needing input
    };
    setCards([...cards, newCard]);
    setNewCardContent('');
  };

  const handleSaveCard = (id, content) => {
    const updatedCards = cards.map(card => {
      if (card.id === id) {
        return { ...card, content, isNew: false };
      }
      return card;
    });
    setCards(updatedCards);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <h1 class="animate__animated animate__bounce">Stack Visualization</h1>
      <div className="app">
        {cards.map(card =>
          card.isNew ?
            <div key={card.id} className="card">
              <input
                autoFocus
                type="text"
                placeholder="Enter card content"
                value={newCardContent}
                onChange={(e) => setNewCardContent(e.target.value)}
                onBlur={() => handleSaveCard(card.id, newCardContent)}
                className="card-input"
              />
            </div>
          :
            <Card key={card.id} id={card.id} content={card.content} />
        )}
        <button onClick={handleAddCard} className="add-card-btn">Cards</button>
        <Stack />
        <Dustbin />
      </div>
    </DndProvider>
  );
}

export default App;
