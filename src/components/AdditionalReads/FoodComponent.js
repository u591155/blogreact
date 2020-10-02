import React, { Component } from "react";

class FoodStuff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addProduct: [
				{
					id: 0,
					image: "assets/images/menu/breakfast-bagel.jpg",
					text: "Breakfast Bagel",
					description: "Egg, cheese and your choice of ham, bacon or sausage",
					price: "$3.50",
				},
				{
					id: 1,
					image: "assets/images/menu/breakfast-burrito.jpg",
					text: "Breakfast Burrito",
					description:
						"Egg, hash brown, cheese and your choice of ham, bacon or sausage",
					price: "$4.50",
				},
				{
					id: 2,
					image: "assets/images/menu/Apple-Oats.jpg",
					text: "Apple Cinnamon Oatmeal",
					description:
						"Steel cut oatmeal spiced with cinnamon and topped with apple slices",
					price: "$3.25",
				},
				{
					id: 3,
					image: "assets/images/menu/sandwiches.jpg",
					text: "BLT Sandwich",
					description: "Bacon, lettuce and tomato with aioli sauce",
					price: "$5.50",
				},
				{
					id: 4,
					image: "assets/images/menu/turkey-sandwich.jpg",
					text: "Turkey Pesto Sandwich",
					description:
						"Turkey breast, provolone, tomato and basil pesto spread on focaccia",
					price: "$6.00",
				},
				{
					id: 5,
					image: "assets/images/menu/tomato-grilled-cheese.jpg",
					text: "Grilled Cheese and Tomato Soup",
					description: "Cheddar, provolone and mozzarella on white bread",
					price: "$7.00",
				},
			],
		};
	}
	render() {
		const addProductCard = this.state.addProduct.map((addProduct) => {
			return (
				<div className='col-sm-8 col-md-6 col-lg'>
					<div className='card-body'>
						<img
							class='card-img-top'
							width='100%'
							src={addProduct.image}
							alt={addProduct.description}
						/>
						<h4 className='card-text'>{addProduct.text}</h4>
						<div className='card-text'>{addProduct.description}</div>
						<div className='card-text'>{addProduct.price}</div>
						<a href='/' className='btn btn-success'>
							Add to Cart
						</a>
					</div>
				</div>
			);
		});

		return (
			<div className='container mb-5'>
				<hr />
				<div className='row mx-auto'>{addProductCard}</div>
			</div>
		);
	}
}

export default FoodStuff;
