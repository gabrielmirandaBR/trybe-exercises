import React, { Component } from 'react';

class CPF extends Component {

  render () {
    const { value, handleChange } = this.props;

    let error = undefined;

    if (value.length > 11) {
      error = 'Limite de 11 caracteres';
    }

    return (
      <div>
        <label>
          <span>CPF:</span>
          <input
            type="text"
            name="cpf"
            value={ value }
            onChange={ handleChange }
            required
          />
        </label>
        <span>{ error ? error : '' }</span>
      </div>
    );
  }
}

export default CPF;