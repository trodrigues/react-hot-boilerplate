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
    var items = this.state.items.map(item => {
      return <li>Item: {item.label}, Quantity: {item.quantity}</li>;
    });
    return (
      <ul>{items}</ul>
    );
  }
};
