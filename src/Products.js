import React, { Component } from 'react';

var productsArray = [
  {
    id: 0,
    name: 'Apple',
    cost: 250
  },
  {
    id: 1,
    name: 'Butter',
    cost: 100
  },
  {
    id: 2,
    name: 'Pen',
    cost: 250
  },
  {
    id: 3,
    name: 'Ice-cream',
    cost: 180
  },
  {
    id: 4,
    name: 'Milk',
    cost: 50
  }
];

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
		this.handleOnProductClick = this.handleOnProductClick.bind(this);
	}

	handleOnProductClick(cost){
		this.setState({
			active: !this.state.active
		});
		if (!this.state.active === false) {
			cost = -1*cost;
		} 
		this.props.onProductClick(cost);
	}
	render() {
		var id = this.props.id;
		var product = productsArray[id];
		return(
			<div key = {id} 
	    		onClick = {(e) => this.handleOnProductClick(product.cost, e)}
				style = {{backgroundColor: this.state.active ? 'blue' : ''}}
	    		className="product">
	      		<p>{product.name}</p>
	      		<p>{product.cost}тг</p>
	    	</div>
		);
	}
}


class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
		}
		this.handleOnProductClick = this.handleOnProductClick.bind(this);
	}

	handleOnProductClick(cost) {
		var amount = this.state.total;
		amount += cost;
		this.setState({
			total: amount
		});
	}

	createProducts = (product) => (
	    <Product key = {product.id} id = {product.id} onProductClick = {this.handleOnProductClick}/>
	)

	render() {
		var products = productsArray.map(this.createProducts);
		return (
			<div className="product-container">
	          <h2>Products</h2>
	          <div className="table">
	            {products}
	          </div>
	          <div>total: {this.state.total}тг</div>
	        </div>
		);
	}

}

export default Products