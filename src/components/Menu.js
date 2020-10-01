import React from "react";
import MenuStuff from "./AdditionalReads/MenuComponent";
import FoodStuff from "./AdditionalReads/FoodComponent";

function Menu() {
	return (
		<React.Fragment>
			<div className='col-sm col-md col-lg mt-5' id='postSection'>
				<h2 className='postTitle text-center'>Menu</h2>
				<br />
				<h3>Welcome to Cafe the Blog!</h3>
				<hr />
				<p>
					Here at Café the Blog! We pride ourselves on the quality of our
					products. We have a wide range of beverages and foods you can enjoy on
					the go as well as a subscription service so you can enjoy a great cup
					of coffee safely at home. Although we would like to be operating as
					usual, we appreciate that you’re staying safe and following guidelines
					so we can all get back soon. We are still open and providing curbside
					pickup so you can still get to enjoy our bestsellers or explore our
					full menu and try something new.
				</p>
			</div>
			<div>
				<MenuStuff />
			</div>
			<div>
				<FoodStuff />
			</div>
		</React.Fragment>
	);
}

export default Menu;




