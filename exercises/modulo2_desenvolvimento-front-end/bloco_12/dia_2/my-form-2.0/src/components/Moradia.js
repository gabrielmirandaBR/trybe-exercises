import React, { Component } from 'react';

class Moradia extends Component {
  render() {
    const { check, handleChange } = this.props;
    return (
      <div>
        <span>Moradia:</span>
        <label>
          Casa / Apartamento
          <input
            type="checkbox"
            name="moradia"
            check={ check }
            onChange={ handleChange }
            required
          />
        </label>
      </div>
    );
  }
}

export default Moradia;