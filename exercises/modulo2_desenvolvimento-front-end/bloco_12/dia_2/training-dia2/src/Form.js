import React, { Component } from 'react';
import EstadoOrigem from './EstadoOrigem';
import ResideNoEstado from './ResideNoEstado';
import Idade from './Idade';
import Complemento from './Complemento';
import File from './File';

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      complemento: '',
      estadoOrigem: '',
      idade: 0,
      resideNoEstado: 'false',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <fieldset>
          <EstadoOrigem value={this.state.estadoOrigem} handleChange={this.handleChange} />
          <ResideNoEstado check={this.state.resideNoEstado} handleChange={this.handleChange}/>
          <Idade value={this.state.idade} handleChange={this.handleChange}/>
          <Complemento value={this.state.complemento} handleChange={this.handleChange}/>
          <File />
        </fieldset>
      </form>
    )
  }
}

export default Form;