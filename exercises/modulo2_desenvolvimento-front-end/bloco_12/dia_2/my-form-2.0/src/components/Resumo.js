import React, { Component } from 'react';

class Resumo extends Component {
  render() {

    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 1000) {
      error = 'Limite de 1000 caracteres'
    }

    return (
      <div>
        <label>
          <p>Resumo do currículo</p>
          <textarea 
            name="resumoCurriculo"
            value={ value }
            onChange= { handleChange }
            required
          />
        </label>
        <span>{ error ? error : '' }</span>
    
      </div>
    );
  }
}

export default Resumo;