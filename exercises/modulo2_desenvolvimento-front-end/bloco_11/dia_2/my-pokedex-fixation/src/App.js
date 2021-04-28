import React, { Component } from 'react';
import './App.css';
import pokemonData from './data';
import Pokedex from './components/Pokedex'

class App extends Component {
  render() {
    return (
      <section className = 'main-content'>
        <Pokedex pokemonsInfo = { pokemonData } />
      </section>
    );
  }
}

export default App;
