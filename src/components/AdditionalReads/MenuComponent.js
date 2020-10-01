import React, { Component } from "react";

class MenuStuff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addProduct: [
				{
					id: 0,
					image: "assets/images/menu/strong-coffee.jpg",
					text: "Coffee",
					description: "Fresh brewed coffee",
				},
				{
					id: 1,
					image: "assets/images/menu/fresh-orange-juice.jpg",
					text: "Orange Juice",
					description: "Fresh squeezed orange juice",
				},
				{
					id: 2,
					image: "assets/images/menu/fresh-orange-juice.jpg",
					text: "Apple Juice",
					description: "Organic bottled juice",
				},
				{
					id: 3,
					image: "assets/images/menu/strong-coffee.jpg",
					text: "Caffe Latte",
					description: "Espresso, steamed milk and milk foam",
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


export default MenuStuff;
