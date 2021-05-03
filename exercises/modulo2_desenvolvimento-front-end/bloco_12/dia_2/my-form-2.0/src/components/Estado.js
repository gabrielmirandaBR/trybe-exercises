import React, { Component } from 'react';

class Estado extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <div>
        <label>
          <span>Estado:</span>
          <select
            name="estado"
            value = { value }
            onChange= { handleChange }
            required
          >
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Sao Paulo">São Paulo</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
          </select>
        </label>
      </div>
    );
  }
}

export default Estado;