import React, { Component } from 'react';
import {Row} from 'reactstrap';
import { Switch, Route} from 'react-router-dom';
import Footer from '../components/FooterComponent';
import Home from '../components/HomeComponent';
import NavBar from '../components/NavBarComponent';
import ModalTable from '../components/modalComponents/modalTable';
import PoliticsPage from './BlogPages/PoliticsPage';
import LawPage from './BlogPages/LawPage';
import SideNavigation from './SideNavigation';
import PoliticsResource from './Resources/PoliticsResourceComponent';
import Menu from '../components/Menu';


class Main extends Component {
    render() {

        return (
            <div className="container">
                <Home />
                <NavBar />
                <Row>
                <SideNavigation />
                <Switch><Route path='/PoliticsPage' component={PoliticsPage} /></Switch>
                <Switch><Route path='/LawPage' component={LawPage} /></Switch>
                </Row>
                <Row>
                <ModalTable />    
                <Footer />
                </Row>
            </div> 
        );
    }
}

export default Main;