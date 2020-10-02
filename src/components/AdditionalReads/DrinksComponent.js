import React, { Component } from "react";

class DrinksStuff extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addProduct: [
				{
					id: 0,
					image: "assets/images/menu/fresh-orange-juice.jpg",
					text: "Orange Juice",
					description: "Fresh squeezed orange juice",
					price: "$3.50",
				},
				{
					id: 1,
					image: "assets/images/menu/apple_juice.jpg",
					text: "Apple Juice",
					description: "Organic bottled juice",
					price: "$2.50",
				},
				{
					id: 2,
					image: "assets/images/menu/lemonade.jpg",
					text: "Lemonade",
					description: "Fresh squeezed lemonade",
					price: "$2.50",
				},
				{
					id: 3,
					image: "assets/images/menu/iced-teas.jpg",
					text: "Iced Tea",
					description: "Peach, Raspberry, Pomegranate or Lemon",
					price: "$2.50",
				},
				{
					id: 4,
					image: "assets/images/menu/italian-sodas.jpg",
					text: "Italian Soda",
					description: "Peach, Strawberry, Mango or Lime",
					price: "$2.50",
				},
				{
					id: 5,
					image: "assets/images/menu/lemon-tea.jpg",
					text: "Herbal Tea",
					description: "English Breakfast, Green Tea or Oolong",
					price: "$2.00",
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

export default DrinksStuff;
