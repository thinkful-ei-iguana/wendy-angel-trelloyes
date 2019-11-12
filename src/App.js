import React, {Component} from 'react';
import List from '.List';
import './App.css';

class App extends {
  static defaultProps = {
    store: {
      lists:[],
      allCards: {},
    }
  };

  render(){
    const {store}  = this.props
    return (
      <main className='App'>
        <header className='App-Header'>
          <h1> Trelloyes! </h1>
        </header>
        <div class = "App-List"> 
          {store.lists.map(list =>
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          )}
        </div>
      </main>
    );
}

export default App;
