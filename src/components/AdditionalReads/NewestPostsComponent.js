import React, { Component } from "react";

class NewestPosts extends Component {
	constructor(props) {
		super(props);
		this.state = {
			addReads: [
				{
					id: 0,
					image: "assets/images/politics/voting.jpg",
					text:
						"Up coming elections and how do you vote safely! All you need to know about the up coming elections and what the plan is to keep voters safe.",
					description: "Voting",
				},
				{
					id: 1,
					image: "assets/images/economy/saving-money.jpg",
					text:
						"Count Your pennies: 5 tips on how every penny counts! Find ways to make your money last during these difficult times.",
					description: "Money",
				},
				{
					id: 2,
					image: "assets/images/health/health-balance.jpg",
					text:
						"Health is a balance, but what does that means? Starting a new journey requires an explanation",
					description: "Health is a balance",
				},
				{
					id: 3,
					image: "assets/images/society/people-helping.jpg",
					text:
						"Laying a helping hands is easy as to check in! Keeping in touch during these hard times is as easy as pushing a few buttons.",
					description: "helping hands",
				},
			],
		};
	}
	render() {
		const addReadCard = this.state.addReads.map((addRead) => {
			return (
				<div className='col-sm-8 col-md-6 col-lg'>
					<div className='card-body'>
						<img
							class='card-img-top'
							width='100%'
							src={addRead.image}
							alt={addRead.description}
						/>
						<div className='card-text'>{addRead.text}</div>
						<a href='/' className='btn btn-primary'>
							Find out
						</a>
					</div>
				</div>
			);
		});

		return (
			<div className='container mb-5'>
				<hr />
				<div className='row mx-auto'>{addReadCard}</div>
			</div>
		);
	}
}

export default NewestPosts;
