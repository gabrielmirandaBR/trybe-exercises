import React, { Component } from 'react';

class Nome extends Component {
  
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 40) {
      error = 'Limite de 40 caracteres'
    }

    const valueUpperCase = value.toUpperCase();

    return (
      <div>
        <label>
          <span>Nome:</span>
          <input
            type="text"
            name="name"
            value={ valueUpperCase }
            onChange={ handleChange }
            required
          />
        </label>
        <span>{error ? error : ''}</span>
      </div>
      
    );
  }
}

export default Nome;