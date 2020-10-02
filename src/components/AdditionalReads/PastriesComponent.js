import React, { Component } from "react";

class PastriesStuff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addProduct: [
				{
					id: 0,
					image: "assets/images/menu/croissants.jpg",
					text: "Croissant",
					description: "Plain, Chocolate or Almond",
					price: "$2.50",
				},
				{
					id: 1,
					image: "assets/images/menu/variety-muffins.jpg",
					text: "Muffin",
					description: "Chocolate Chip, Blueberry, Banana Nut or Lemmon Poppy",
					price: "$2.50",
				},
				{
					id: 2,
					image: "assets/images/menu/cinnamon-rolls.jpg",
					text: "Cinnamon Roll",
					description: "Flaky pastry with cinnamon filling",
					price: "$2.75",
				},
				{
					id: 3,
					image: "assets/images/menu/brownie.jpg",
					text: "Brownie",
					description: "Regular, Dark or with Nuts",
					price: "$2.25",
				},
				{
					id: 4,
					image: "assets/images/menu/cookies-variety.jpg",
					text: "Cookie",
					description:
						"Chocolate Chip, Snickerdoodle, Sugar or Black and White",
					price: "$2.00",
				},
				{
					id: 5,
					image: "assets/images/menu/scones.jpg",
					text: "Scones",
					description:
						"Chocolate Chips, Blueberry, Cranberry, or Jalapeno Cheddar",
					price: "$2.50",
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

export default PastriesStuff;
