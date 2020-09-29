import React, { Component } from 'react';
import {Row} from 'reactstrap';
import { Switch, Route} from 'react-router-dom';
import Footer from '../components/FooterComponent';
import Home from '../components/HomeComponent';
import NavBar from '../components/NavBarComponent';
import ModalTable from '../components/modalComponents/modalTable';
<<<<<<< HEAD
import SideNavigation from './SideNavigation'
import LawPost from './PostBlog/lawPost';
import PoliticsPost from './PostBlog/politicsPost';
import SocietyPost from './PostBlog/societyPost';
import EconomyPost from './PostBlog/economyPost';
import FitnessPost from './PostBlog/fitnessPost';
import HealthPost from './PostBlog/healthPost';

=======
import PoliticsPage from './BlogPages/PoliticsPage';
import LawPage from './BlogPages/LawPage';
import SideNavigation from './SideNavigation';
import PoliticsResource from './Resources/PoliticsResourceComponent';
import Menu from '../components/Menu';
>>>>>>> 41e1c0fa851e6bbc6724df34f2620855a5410ece


class Main extends Component {
    render() {

        return (
            <div className="container">
                <Home />
                <NavBar />
                <Row>
                <SideNavigation />
                <Switch><Route path='/HealthPage' component={HealthPost} /></Switch>
                <Switch><Route path='/FitnessPage' component={FitnessPost} /></Switch>
                <Switch><Route path='/EconomyPage' component={EconomyPost} /></Switch>
                <Switch><Route path='/SocietyPage' component={SocietyPost} /></Switch>
                <Switch><Route path='/PoliticsPage' component={PoliticsPost} /></Switch>
                <Switch><Route path='/LawPage' component={LawPost} /></Switch>
                </Row>
                <ModalTable />    
                <Footer />
            </div> 
        );
    }
}

export default Main;