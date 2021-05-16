import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      dogs: [],
    };

    this.fetchDogs = this.fetchDogs.bind(this);
    this.nextDog = this.nextDog.bind(this);
  }

  componentDidMount() {
    this.fetchDogs();
  }

  /*   shouldComponentUpdate() {
    // IMPLEMENTAR LÓGICA AQUI
  } */

  async fetchDogs() {
    this.setState({
      loading: true,
    },
    async () => {
      const requestAPI = await fetch('https://dog.ceo/api/breeds/image/random');
      const requestResponse = await requestAPI.json();

      this.setState((prev) => ({
        loading: false,
        dogs: [...prev.dogs, requestResponse.message],
      }));
    });
  }

  nextDog(event) {
    event.preventDefault();

    this.fetchDogs();
  }

  renderDogs() {
    const { dogs } = this.state;
    return (
      dogs.map((dog) => (<img
        key={ dog }
        src={ dog }
        alt="dog"
        width="400px"
        height="350px"
      />))
    );
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span>Loading...</span>;
    return (
      <div className="App">
        <header>
          <h1>Random Dogs</h1>
        </header>
        <div className="btn-container">
          <button type="submit" onClick={ this.nextDog }>Próximo doguinho</button>
        </div>
        <div className="images-container">
          {loading ? loadingElement : this.renderDogs()}
        </div>
      </div>
    );
  }
}

export default App;
