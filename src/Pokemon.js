import React, { Component } from 'react';
import axios from 'axios';

const API_URL = 'http://pokeapi.co/';
const API_PATH = API_URL + 'api/v1/';

export default class Pokemon extends Component {
  constructor(props){
    super(props);
    this.state = {name: '', image: ''};
  }

  componentDidMount() {
    axios.get(API_PATH + `pokemon/${this.props.id}/`)
    .then(response => {
      var name = response.data.name;
      axios.get(API_URL + response.data.sprites[0].resource_uri)
      .then(response => this.setState({
        name: name,
        image: API_URL + response.data.image
      }));
    });
  }

  render() {
    return (
      <PokemonDisplay name={this.state.name} image={this.state.image} />
    );
  }

};
