import React, { Component } from 'react'

class MontaCurriculo extends Component {

  
  render() {
    const { handleClickCreate } = this.props;

    return(
      <div>
        <button 
          type="submit" 
          onClick={ handleClickCreate }
        >
          Cria Currículo
        </button>
      </div>
    );
  }
}

export default MontaCurriculo;