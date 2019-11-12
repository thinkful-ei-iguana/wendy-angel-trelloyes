import React from 'react';
import Card from './Card'
import './List.css';

function List({header,cards}) {
  <section class= "list">
    <header>
      <h2> {props.header}</h2>
    </header>
    <div class ="List-Cards">
      {props.cards.map((card)=>
        <Card>
          key={card.id}
          title={card.title}
          content={card.content}
        </Card> 
      )}
      <button
        type = "button"
        className = 'List-add-button'
      >
        +Add Random Card
      </button>
    </div>
  </section>
}

export default List;
