import React, { Component } from 'react'

class Cidade extends Component {
  render() {

    const { value, handleChange, handleBlur } = this.props;
    return (
      <div>
        <label>
          <span>Cidade:</span>
          <input
            type="text"
            name="cidade"
            value={ value }
            onChange={ handleChange }
            onBlur={ handleBlur }
            required
          />
        </label>
      </div>
    );
  }
}

export default Cidade;