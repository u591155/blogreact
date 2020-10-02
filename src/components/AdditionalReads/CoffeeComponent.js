import React, { Component } from "react";

class CoffeeStuff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addProduct: [
				{
					id: 0,
					image: "assets/images/menu/fresh-brewed-coffee.jpg",
					text: "Coffee",
					description: "Fresh brewed coffee",
					price: "$1.75",
				},
				{
					id: 1,
					image: "assets/images/menu/espresso-macchiato.jpg",
					text: "Espresso Macchiato",
					description: "Espresso with milk foam",
					price: "$3.00",
				},
				{
					id: 2,
					image: "assets/images/menu/caffe-latte.jpg",
					text: "Caffe Latte",
					description: "Espresso, steamed milk and milk foam",
					price: "$3.50",
				},
				{
					id: 3,
					image: "assets/images/menu/flat-white.jpg",
					text: "Flat White",
					description: "Espresso and steamed milk",
					price: "$3.50",
				},
				{
					id: 4,
					image: "assets/images/menu/cafe-mocha.jpg",
					text: "Caffee Mocha",
					description:
						"Espresso, chocolate syrup, steamed milk and whipped cream",
					price: "$3.50",
				},
				{
					id: 5,
					image: "assets/images/menu/red-eye.jpeg",
					text: "Red Eye",
					description: "Espresso with coffee",
					price: "$2.75",
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
						<h5 className='card-text'>{addProduct.text}</h5>
						<div className='card-text'>{addProduct.description}</div>
						<div className='card-text'>{addProduct.price}</div>
						<a href='/' className='btn btn-warning'>
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


export default CoffeeStuff;
