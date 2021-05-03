import React, { Component } from 'react';

class Email extends Component {

  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 50) {
      error = "Limite de 50 caracteres";
    }
    
    return (
      <div>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
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

export default Email;