import React, { Component } from 'react';

class File extends Component {
  render() {
    return (
      <label>
        Importe sua foto:
        <input
          type="file" 
        />
      </label>
    );
  }
}

export default File;