import React, { Component } from 'react';

class Idade extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label>
        Qual sua idade?
        <input 
          name="idade" 
          value={ value } 
          onChange={ handleChange } 
          type="number"
        />
  
      </label>
    );
  }
}

export default Idade;