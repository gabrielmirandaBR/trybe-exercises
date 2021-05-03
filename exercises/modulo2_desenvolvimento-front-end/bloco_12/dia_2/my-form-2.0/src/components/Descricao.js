import React, { Component } from 'react'

class Descricao extends Component {
  render() {
    const { value, handleChange, handleMouseEnter } = this.props;

    let error = undefined;
    if (value.length > 40) {
      error = "Limite de 40 caracteres"
    }

    return (
      <div>
        <label>
          <p>Descrição do Cargo</p>
          <textarea
            name="descricaoCargo"
            value= { value }
            onChange={ handleChange }
            onMouseEnter= { handleMouseEnter }
            required
          />
        </label>
        <span>{ error ? error : '' }</span>
      </div>
    );
  }
}

export default Descricao;