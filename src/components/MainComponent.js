import React, { Component } from 'react';
import {Row} from 'reactstrap';
import { Switch, Route} from 'react-router-dom';
import Footer from '../components/FooterComponent';
import Home from '../components/HomeComponent';
import LawPost from './PostBlog/lawPost';
import PoliticsPost from './PostBlog/politicsPost';
import SocietyPost from './PostBlog/societyPost';
import EconomyPost from './PostBlog/economyPost';
import FitnessPost from './PostBlog/fitnessPost';
import HealthPost from './PostBlog/healthPost';
import Nav from './Nav';
import Menu from './Menu';
import Index from './IndexComponent'


class Main extends Component {
    render() {

        return (
					<div className='container'>
						<Home />
						<Nav />
						<Row>
							<Switch>
								<Route path='/Index' component={Index} />
							</Switch>
							<Switch>
								<Route path='/Menu' component={Menu} />
							</Switch>
							<Switch>
								<Route path='/HealthPage' component={HealthPost} />
							</Switch>
							<Switch>
								<Route path='/FitnessPage' component={FitnessPost} />
							</Switch>
							<Switch>
								<Route path='/EconomyPage' component={EconomyPost} />
							</Switch>
							<Switch>
								<Route path='/SocietyPage' component={SocietyPost} />
							</Switch>
							<Switch>
								<Route path='/PoliticsPage' component={PoliticsPost} />
							</Switch>
							<Switch>
								<Route path='/LawPage' component={LawPost} />
							</Switch>
						</Row>
						<Footer />
					</div>
				);
    }
}

export default Main;