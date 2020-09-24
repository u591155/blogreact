import React, { Component } from 'react';
import './App.css';
import Footer from './components/FooterComponent';
import Home from './components/HomeComponent';
import FitnessAdditionalR from './components/AdditionalReads/FitnessReadsComponent';
import HealthAdditionalR from './components/AdditionalReads/HealthReadsComponent';
import SocietyAdditionalR from './components/AdditionalReads/SocietyReadsComponent';
import LawAdditionalR from './components/AdditionalReads/LawReadsComponent';
import EconomyAdditionalR from './components/AdditionalReads/EconomyReadsComponent';
import PoliticalAdditionalR from './components/AdditionalReads/PoliticsReadsComponent';
import EconomyResource from './components/Resources/EconomyResourceComponent';
import FitnessResource from './components/Resources/FitnessResourceComponent';
import HealthResource from './components/Resources/HealthResourceComponent';
import LawResource from './components/Resources/LawResourceComponent';
import PoliticsResource from './components/Resources/PoliticsResourceComponent';
import SocietyResource from './components/Resources/SocietyResourceComponent';
import EconomyPost from './components/PostBlog/economyPost';
import FitnessPost from './components/PostBlog/fitnessPost';
import HealthPost from './components/PostBlog/healthPost';
import LawPost from './components/PostBlog/lawPost';
import PoliticsPost from './components/PostBlog/politicsPost';
import SocietyPost from './components/PostBlog/societyPost';
import EconomyModal from './components/modalComponents/economyModal';
import NavBar from './components/NavBarComponent';
import ModalTable from './components/modalComponents/modalTable'


class App extends Component {
    render() {
        return (
                <div className="container">
                <Home />
                <NavBar />
                <ModalTable />
                <FitnessAdditionalR />
                <HealthAdditionalR />
                <SocietyAdditionalR />
                <LawAdditionalR />
                <EconomyAdditionalR />
                <LawAdditionalR />
                <PoliticalAdditionalR />
                <Footer />
                <EconomyResource />
                <FitnessResource />
                <HealthResource />
                <LawResource />
                <PoliticsResource />
                <SocietyResource />
                <EconomyPost />
                <FitnessPost />
                <HealthPost />
                <LawPost />
                <PoliticsPost />
                <SocietyPost />
                </div>
        );
    }
}

export default App;
