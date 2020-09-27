import React from "react";

//function Menu(props) {
//	return (
//		<div></div>
//	);
//}

function Menu(props) {
	return (
		<div>
			<header class='jumbotron jumbotron-fluid mainJumbo'>
				<div class='container' id='test'>
					<div class='row'>
						<div class='col-10 heading'>
							<h1>The Menu!</h1>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

class ProductCategoryRow extends React.Component {
	render() {
		const category = this.props.category;
		return (
			<tr>
				<th colSpan='2'>{category}</th>
			</tr>
		);
	}
}

class ProductRow extends React.Component {
	render() {
		const product = this.props.product;
		const name = product.ordered ? (
			product.name
		) : (
			<span style={{ color: "red" }}>{product.name}</span>
		);

		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		);
	}
}

class ProductTable extends React.Component {
	render() {
		const rows = [];
		let lastCategory = null;

		this.props.products.forEach((product) => {
			if (product.category !== lastCategory) {
				rows.push(
					<ProductCategoryRow
						category={product.category}
						key={product.category}
					/>
				);
			}
			rows.push(<ProductRow product={product} key={product.name} />);
			lastCategory = product.category;
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}
}

class SearchBar extends React.Component {
	render() {
		return (
			<form>
				<input type='text' placeholder='Search...' />
				<p>
					<input type='checkbox' /> Only show products ordered
				</p>
			</form>
		);
	}
}

class FilterableProductTable extends React.Component {
	render() {
		return (
			<div>
				<SearchBar />
				<ProductTable products={this.props.products} />
			</div>
		);
	}
}

const PRODUCTS = [
	{ category: "Coffee", price: "$2.99", ordered: true, name: "Espresso" },
	{ category: "Drinks", price: "$3.99", ordered: false, name: "Orange Juice" },
	{ category: "Pastries", price: "$2.99", ordered: true, name: "Croissant" },
	{ category: "Food", price: "$7.99", ordered: false, name: "BLT Sandwich" },
	{
		category: "Subscription Box",
		price: "$29.99",
		ordered: false,
		name: "Variety Pack",
	},
];

//ReactDOM.render(
//	<FilterableProductTable products={PRODUCTS} />,
//	document.getElementById("container")
//);



export default Menu; 




