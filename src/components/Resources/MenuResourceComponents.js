import React, { Component } from "react";
import { menuData } from "../sharedData/sharedData";

class MenuResource extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuData,
		};
	}
	render() {
		const menuCard = this.state.menuData.map((product) => {
			return (
				<div className='col-sm-8 col-md-6 col-lg'>
					<div className='card-body'>
						<h5 className='card-title'>{product.title}</h5>
						<div className='card-text'>{product.text}</div>
						<br />
						<a
							href={product.link}
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-danger'>
							Go
						</a>
					</div>
				</div>
			);
		});

		return (
			<div className='container mt-5 mb-5'>
				<h3 class='text-dark text-center'>Product</h3>
				<div className='row mx-auto'>{menuCard}</div>
			</div>
		);
	}
}

export default MenuResource;
