import React, { Component } from 'react';

class Complemento extends Component {
  render() {
    const {value, handleChange} = this.props;

    let error = undefined;
    if (value.length > 120) {
      return error = 'Máximo de 120 caracteres';
    }
    return (
      <label>
        Digite os seus complementos:

        <textarea
          name="complemento"
          value={ value } 
          onChange={handleChange}
        />
      <span>{error ? error : ''}</span>
      </label>
    );
  }
}

export default Complemento;