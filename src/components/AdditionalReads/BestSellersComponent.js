import React, { Component } from "react";

class BestSellers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addProduct: [
				{
					id: 0,
					image: "assets/images/menu/caffe-latte.jpg",
					text: "Caffe Latte",
					description: "Espresso, steamed milk and milk foam",
					price: "$3.50",
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
					image: "assets/images/menu/fresh-orange-juice.jpg",
					text: "Orange Juice",
					description: "Fresh squeezed orange juice",
					price: "$3.50",
				},
				{
					id: 3,
					image: "assets/images/menu/breakfast-bagel.jpg",
					text: "Breakfast Bagel",
					description: "Egg, cheese and your choice of ham, bacon or sausage",
					price: "$3.50",
				},
				{
					id: 4,
					image: "assets/images/menu/turkey-sandwich.jpg",
					text: "Turkey Pesto Sandwich",
					description:
						"Turkey breast, provolone, tomato and basil pesto spread on focaccia",
					price: "$6.00",
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
						<a href='/' className='btn btn-warning'>
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

export default BestSellers;
