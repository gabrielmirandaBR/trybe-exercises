import React, { Component } from 'react';

class LimpaCurriculo extends Component {
  render() {
    const { handleClickErase } = this.props;
    return (
      <button
        type="reset"
        onClick={ handleClickErase }
      >
        Limpar
      </button>
    );
  }
}

export default LimpaCurriculo;