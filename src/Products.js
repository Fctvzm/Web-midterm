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

class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			active: []
		}
		this.handleOnProductClick = this.handleOnProductClick.bind(this);
	}

	handleOnProductClick(product) {
		var arr = this.state.active;
		var length = arr.length;
		arr = arr.filter(function (product) {
			return (product.id !== arr.id);
		});
		if (arr.length === length) {
			arr.push({
			id: product.id,
			name: product.name,
			cost: product.cost
			});
		} 
		console.log(arr);
		var amount = 0;
		for(var i = 0; i < arr.length; i++) {
    		amount += arr[i].cost;
    	}
    	console.log(amount);
		this.setState({
			active: arr,
			total: amount
		})
	}

	createProducts = (product) => (
	    <div key = {product.id} 
	    	onClick = {(e) => this.handleOnProductClick(product, e)}
	    	className="product">
	      <p>{product.name}</p>
	      <p>{product.cost}тг</p>
	    </div>
	)

	render() {
		var products = productsArray.map(this.createProducts);
		return (
			<div className="product-container">
	          <h2>Products</h2>
	          <div className="table">
	            {products}
	          </div>
	        </div>
		);
	}

}

export default Products