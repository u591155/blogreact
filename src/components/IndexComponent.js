import React, { Component } from 'react';
import BestSellers from './AdditionalReads/BestSellersComponent';
import NewestPosts from './AdditionalReads/NewestPostsComponent';


function Index() {
	return (
		<React.Fragment>
			<div className='col-sm col-md col-lg mt-5' id='postSection'>
				<h2 className='postTitle text-center'>Welcome to our Page!</h2>
				<hr />
				<p>
					Thank you for making us part of your day and welcome to Café the Blog!
				</p>
				<p>
					We recognize that there are many options out there that can serve you
					coffee and food, and feel honored that you’ve chosen us to do so.
				</p>
				<p>
					Here at Café the Blog! We pride ourselves on the quality of our
					products. We have a wide range of beverages and foods you can enjoy on
					the go as well as a subscription service so you can enjoy a great cup
					of coffee safely at home. Although we would like to be operating as
					usual, we appreciate that you’re staying safe and following guidelines
					so we can all get back soon. We are still open and providing curbside
					pickup so you can still get to enjoy our bestsellers or explore our
					full menu and try something new. We are missing interacting with all
					of you and have added a new way to communicate with the community in
					our very own blog page! We would like to invite you to visit our page
					and explore some of the topics that might interest you.
				</p>
				<br />
			</div>
			<div>
				<h3>Our BestSellers:</h3>
				<BestSellers />
			</div>
			<div>
				<hr />
				<h3>THE BLOG!</h3>
				<p>
					We miss the company and the conversations we used to see at our shop,
					and thought about how great it would be to still provide a safe place
					where people can stay informed and learn more about topics they care
					about. We’ve created this blog as an outlet for people to not only
					engage with each other but also a platform where can find help on
					various issues they might be facing.
				</p>
				<p>
					The articles are written by community partners who are experts on
					their fields, and that have taken the time to share with us resources
					that shine light in everyday issues that we all face. As part of the
					community we called on our friends to share their knowledge in hopes
					of maintain an open communication with all of you. Even though we have
					to maintain our social distancing, we still want to stay connected
					with all of you so please explore our pages and reach out to us if you
					want us to post about a topic that interests you.
				</p>
				<p>
					Here we are still together as a community, and hope that you enjoy it
					as much as we’ve enjoyed making it for you. Stay safe and we hope to
					see you soon. Stay healthy!
				</p>
				<div>
					<h4>Our Newest Posts:</h4>
					<NewestPosts />
				</div>
				<a
					role='button'
					class='btn fa fa-book btn-danger btn-ld'
					href='./src/components/PostBlog/healthPost.js'>
					MORE BLOGS!
				</a>
			</div>
			<br />
		</React.Fragment>
	);
}

export default Index;