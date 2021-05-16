import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemonsInfo;
    return (
      <section className = 'card-pokemon'>
        <div className = 'infos-pokemon'>
          <p className = 'name-pokemon'>{ name }</p>
          <p>{ type }</p>
          <p>{ `Measurement: ${ value } ${ measurementUnit }` }</p>
        </div>
        <div>
          <img className = 'img-pokemon' src = { image } alt= { name }/>
        </div>
      </section>
    );
  }
}

Pokemon.propTypes = {
  pokemonsInfo: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string
    }),
    image: PropTypes.string
  }).isRequired
}

export default Pokemon;