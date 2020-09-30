import React from 'react';
import { NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom'

function SideNavigation(){
    return(
        <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2 d-none d-sm-block mt-5 border-right">
        <h3 className="text-dark ml-3 border-bottom">Topics</h3>
        <ul className="list-unstyled" className="blogItems">
            <nav class="nav flex-column">
                <NavItem className="mt-3 mb-3">
                    <NavLink className="text-dark" to="/HealthPage"><i className="fa fa-user-md fa-lg"></i> Health </NavLink>
                </NavItem>
                <NavItem className="mb-3">
                    <NavLink className="text-dark" to="/FitnessPage"><i className="fa fa-child fa-lg"></i> Fitness </NavLink>
                </NavItem>
                <NavItem className="mb-3">
                    <NavLink className="text-dark" to="/EconomyPage"><i className="fa fa-money fa-lg"></i> Economy </NavLink>
                </NavItem>
                <NavItem className="mb-3">
                    <NavLink className="text-dark"  to="/SocietyPage"><i className="fa fa-handshake-o fa-lg"></i> Society </NavLink>
                </NavItem>
                <NavItem className="mb-3">
                    <NavLink className="text-dark"  to="/PoliticsPage"><i className="fa fa-university fa-lg"/> Politics </NavLink>
                </NavItem>
                <NavItem className="mb-3">
                    <NavLink className="text-dark"  to="/LawPage"> <i className="fa fa-gavel fa-lg"></i> Law </NavLink>
                </NavItem>
                -Blog Home-
            </nav>
        </ul>
    </div> 

    ) 
}

export default SideNavigation