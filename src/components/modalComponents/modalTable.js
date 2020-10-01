import React from 'react';
import FitnessModal from './fitnessModal';
import EconomyModal from './economyModal';
import HealthModal from './healthModal';
import LawModal from './lawModal';
import SocietyModal from './societyModal';
import PoliticsModal from './politicsModal';

function ModalTable(){
    return(
        <div className="container container-resources mt-5 mb-5">
            <div className="row content">
                <div className="col-lg-6 col-md mt-5 mr-5 text-center" id="resources">
                    Resources
                    <table className="table table-white" id="resources">
                        <tbody>
                            <tr>
                                <td><FitnessModal/></td>
                                <td><EconomyModal/></td>
                                <td><HealthModal/></td>
                                <td><LawModal/></td>
                                <td><SocietyModal /></td>
                                <td><PoliticsModal /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg col-md-4 card">
                    <div className="card-header text-center">
                     Featured Add
                    </div>
                     <img src="assets/images/podcast.jpg" className="card-img-top" alt="..."/>
                </div>
            </div>
        </div>
    );
}


export default ModalTable