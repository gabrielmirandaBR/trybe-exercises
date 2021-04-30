import React, { Component } from 'react';

class EstadoOrigem extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <label>
        Qual o seu estado de origem?
        <select
          name="estadoOrigem"
          value={ value }
          onChange={ handleChange }
        >
          <option value="Minas Gerais">Minas Gerais</option>
          <option value="Bahia">Bahia</option>
        </select>
      </label>
    );
  }
}

export default EstadoOrigem;