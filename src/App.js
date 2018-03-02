import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Products'

var itemsArray = [
  {
    id: 0,
    name: 'Home'
  },
  {
    id: 1,
    name: 'About'
  },
  {
    id: 2,
    name: 'Contact'
  },
];


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: itemsArray[0]
    }
  }

  handleOnClick = (id) => (
    this.setState({
      active: itemsArray[id]
    })
  )

  createItems = (item) => (
    <div key = {item.id} className="item"
      style = {{backgroundColor: item === this.state.active ? 'blue' : ''}} 
      onClick={(e) => this.handleOnClick(item.id, e)}>
      {item.name}
    </div>
  )

  render() {
    var items = itemsArray.map(this.createItems);
    
    return (
      <div className="App">
        <div className="nav">
          Navigation bar
        </div>
        <div className="items-container">
          {items}
        </div>
        <Product/>
      </div>
    );
  }
}

export default App;
