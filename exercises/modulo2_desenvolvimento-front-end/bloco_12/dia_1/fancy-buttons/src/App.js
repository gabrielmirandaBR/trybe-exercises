import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super()
    this.click1 = this.click1.bind(this);
    this.click2 = this.click2.bind(this);
    this.click3 = this.click3.bind(this);
    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }
  }

  click1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 + 1
    }))
  }

  click2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }))
  }

  click3() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 + 1
    }))
    
  }

  render() {
    return (
      <div>
        <button onClick={ this.click1 }>{ this.state.numeroDeCliques1 }</button>
        <button onClick={ this.click2 }>{ this.state.numeroDeCliques2 }</button>
        <button onClick={ this.click3 }>{ this.state.numeroDeCliques3 }</button>
      </div>
    );
  }
}

export default App;