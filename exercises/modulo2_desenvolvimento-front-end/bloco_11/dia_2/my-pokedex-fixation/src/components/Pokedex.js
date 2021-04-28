import React, { Component } from 'react';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <section className = 'pokemons'>
        {this.props.pokemonsInfo.map((pokemon) => <Pokemon key = {pokemon.id} pokemonsInfo = {pokemon}/>)}
      </section>
    );
  }
}

export default Pokedex;