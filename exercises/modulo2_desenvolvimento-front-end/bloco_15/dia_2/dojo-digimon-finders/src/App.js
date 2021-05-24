import React from 'react';
import './App.css';
import Digimon from './Digimon';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      
      searchDigimon: '', 
      isFetching: false, 
      errorMessage: '',
      digimons: [],
    };
  }

  inputValue = ({ target: { value } }) => {
    this.setState((state) => ({
      searchDigimon: value,
    }));
  }

  newRequestDigimons = async () => {
    const requestAPI = await fetch('https://digimon-api.herokuapp.com/api/digimon');
    const firtFiveDigimons = await requestAPI.json();
    this.setState({
      digimons: firtFiveDigimons.splice(0,5),
      isFetching: true,
    })

  }
  /*   requestDigimon = async () => {
    const { searchDigimon } = this.state;
    if (searchDigimon) {
      fetch(`https://digimon-api.vercel.app/api/digimon/name/${searchDigimon}`)
        .then((res) => res.json())
        .then((results) => this.setState((state) => ({
          ...state,
          digimon: results[0],
          errorMessage: results["ErrorMsg"],
          isFetching: true,
        })));
    }
  } */

  render() {
    const { digimons, isFetching, errorMessage } = this.state;
    return (
      <div className="App">
    {/*     <input
          value={ searchDigimon }
          type="text"
          onChange={ this.inputValue }
          data-testid="input"
        /> */}
        <button
          data-testid="buttonSearch"
          onClick={ this.newRequestDigimons }
          type="button"
        >
          primeiros 5
        </button>
        { isFetching && !errorMessage
          ? <Digimon digimons={ digimons } />
          : <h1>{ errorMessage || 'Faça uma pesquisa' }</h1>
        }
      </div>
    );
  }
}

export default App;
