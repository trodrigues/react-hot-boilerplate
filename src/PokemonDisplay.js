import React, { Component } from 'react';

export default class PokemonDisplay extends Component {
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.image} />
      </div>
    );
  }
};

