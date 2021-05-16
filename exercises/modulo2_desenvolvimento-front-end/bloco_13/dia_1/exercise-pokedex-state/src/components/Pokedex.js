import React, { Component } from 'react';
import Pokemon from './Pokemon';


class Pokedex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      pokemons: props.pokemonsInfo,
      filteredPokemons: false,
    }

    this.handleCkickNextPokemon = this.handleCkickNextPokemon.bind(this);
    this.handleClickFilterPokemon = this.handleClickFilterPokemon.bind(this);
  }
  
  handleCkickNextPokemon() {
    const { pokemons } = this.state;
    this.setState ({
      count: (this.state.count === pokemons.length - 1) ? 0 : this.state.count + 1, // OU (this.state.count + 1 %) 8
    })
  }

  handleClickFilterPokemon({ target }) {
    const contentButton = target.name
    const { pokemons } = this.state;

    this.setState({
      filteredPokemons: true,
      pokemons: pokemons.filter((pokemon) => pokemon.type === contentButton),
    });

    // FALTA IMPLEMENTAR O BOTAO TODOS --> VOLTA COM A LISTA INICIAL
  }

  render() {
    
    const { count, pokemons } = this.state;
    return (
      <section className="pokemons">
        <Pokemon pokemonsInfo = { pokemons[count] }/>

        <section className = "btns-section">
          <button type="button"  onClick={this.handleCkickNextPokemon}>
            Próximo
          </button>

          <button type="button" name="Fire" onClick={this.handleClickFilterPokemon}>
            Type: Fire
          </button>

          <button type="button" name="Psychic" onClick={this.handleClickFilterPokemon}>
            Type: Psychic
          </button>
          <button type="button" name="" onClick={this.handleClickFilterPokemon}>
            Todos
          </button>
        </section>
        
      </section>
    );
  }
}

export default Pokedex;