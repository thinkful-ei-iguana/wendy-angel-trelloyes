import React from 'react';
import STORE from './Store';

function CardTitle(props) {
    const arrayOfLists = STORE.lists.map(list => 
     <List list={list}>

     </List>
    )  
    return (
        <div className="Card">
            {arrayOfLists}
        <button type="button">delete</button>
            <h3>{STORE.allCards.a.title}</h3>  
            <p>{STORE.allCards.a.content}</p>
          </div>
    )
}

function List(props) {
    const arrayOfCards = props.list.cardIds.map(id =>
        <Card id={id}>

        </Card>)
    return (
        <li key={props.list.id}>
            <h2>{props.list.header}</h2>
          {arrayOfCards}
                {props.list.cardIds}
        </li>
    )
}

function Card(props) {
    const card = STORE.allCards[props.id]
    return (
    <div>
        <h3>{card.title}</h3>
        <p>{card.content}</p>
    </div>
    )
}
export default CardTitle;


