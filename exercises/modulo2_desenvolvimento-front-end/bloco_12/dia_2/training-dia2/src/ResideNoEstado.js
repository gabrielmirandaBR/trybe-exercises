import React, { Component } from 'react';

class ResideNoEstado extends Component {
 render() {
   const { check, handleChange } = this.props
  return (
    <label> 
      Reside nesse estado?
      <input 
        name="resideNoEstado"
        type="checkbox" 
        check={ check }
        onChange={handleChange}
      />
    </label>
   );
 }
}

export default ResideNoEstado;