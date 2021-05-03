import React, { Component } from 'react'

class Endereco extends Component {
  
  render() {
    const { value, handleChange } = this.props

    let error = undefined;
    if (value.length > 200) {
      error = "Limite de 200 caracteres"
    }

    const arrValue = value.split('');
    const test = arrValue
      .map(letter => (letter === '!' || letter === '@' || letter === '#') ? letter = '' : letter // COMO IMPLEMENTAR DE MANEIRA MAIS AUTOMÁTICA?
      
    );

    return (
      <div>
        <label>
          <span>Endereço:</span>
          <input
            type="text"
            name="endereco"
            value={ test.join('') }
            onChange={ handleChange }
            required
          />
        </label>
        <span>{ error ? error : '' }</span>
      </div>
    );
  }
}

export default Endereco;