import React, { Component } from 'react';

export default class MyFirstComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      items: [
        {label: 'item 1', quantity: 4},
        {label: 'item 2', quantity: 3}
      ]
    };
  }

  render() {
    var total = this.state.items.reduce((total, item) => total+item.quantity, 0);
    return (
      <p>Total: {total}</p>
    );
  }
};
