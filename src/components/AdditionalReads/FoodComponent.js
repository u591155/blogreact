import React, { Component } from "react";

class FoodStuff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addProduct: [
				{
					id: 0,
					image: "assets/images/menu/sandwiches.jpg",
					text: "BLT Sandwich",
					description: "Bacon, lettuce and tomato with aioli sauce",
				},
				{
					id: 1,
					image: "assets/images/menu/pastries.jpg",
					text: "Croissant",
					description: "Plain, Chocolate or Almond",
				},
				{
					id: 2,
					image: "assets/images/menu/pastries.jpg",
					text: "Cinnamon Roll",
					description: "Flaky pastry with cinnamon filling",
				},
				{
					id: 3,
					image: "assets/images/menu/sandwiches.jpg",
					text: "Turkey Pesto Sandwich",
					description:
						"Turkey breast, provolone, tomato and basil pesto spread on focaccia",
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
						<a href='/' className='btn btn-success'>
							Order Now!
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
