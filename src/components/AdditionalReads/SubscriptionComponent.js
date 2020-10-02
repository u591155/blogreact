import React, { Component } from "react";

class SubscriptionBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addProduct: [
				{
					id: 0,
					image: "assets/images/menu/SB-Africa.jpg",
					text: "African Coffee",
					description:
						"This selection includes coffees from: Ethiopia, Uganda, Ivory Coast, Tanzania and Kenya.",
					price: "$19.99",
				},
				{
					id: 1,
					image: "assets/images/menu/SB-Asia.jpg",
					text: "Asian Coffee",
					description:
						"This selection includes coffees from: Vietnam,  and Indonesia (from multiple islands).",
					price: "$19.99",
				},
				{
					id: 2,
					image: "assets/images/menu/SB-Central.jpg",
					text: "Central American Coffee",
					description:
						"This selection includes coffees from: Guatemala, El Salvador, Honduras, Nicaragua and Costa Rica.",
					price: "$19.99",
				},
				{
					id: 3,
					image: "assets/images/menu/SB-North.jpg",
					text: "North American Coffee",
					description:
						"This selection includes coffees from: Mexico and Hawaii.",
					price: "$19.99",
				},
				{
					id: 4,
					image: "assets/images/menu/SB-South.jpg",
					text: "South American Coffee",
					description:
						"This selection includes coffees from: Brazil, Colombia and Peru.",
					price: "$19.99",
				},
				{
					id: 5,
					image: "assets/images/menu/SB-Variety.jpg",
					text: "Variety Pack",
					description:
						"This selection will includes coffees from each continent so you can experience a variety of flavor profiles.",
					price: "$19.99",
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
						<a href='/' className='btn btn-warning'>
							Subscribe Now!
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

export default SubscriptionBox;
