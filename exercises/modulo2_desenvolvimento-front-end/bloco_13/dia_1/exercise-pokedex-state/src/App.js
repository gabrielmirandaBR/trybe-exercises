import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import pokemonData from './data';
import Pokedex from './components/Pokedex'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className = 'main-content'>
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <h1>Pokedéx</h1>
        <Switch>
          <Route path="/" render={() => <Pokedex pokemonsInfo={pokemonData} /> }/>
        </Switch>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
