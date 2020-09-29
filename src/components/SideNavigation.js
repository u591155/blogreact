import React from 'react';
import { NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom'

function SideNavigation(){
    return(
        <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2 d-none d-sm-block mt-5 border-right">
        <h3 className="text-dark ml-3 border-bottom">Topics</h3>
        <ul className="list-unstyled" class="blogItems">
            <nav class="nav flex-column">
                <NavItem>
                <NavLink to="/HealthPage"><i class="fa fa-user-md fa-md"></i> Health </NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/FitnessPage"><i class="fa fa-child fa-md"></i> Fitness </NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/EconomyPage"><i class="fa fa-money fa-md"></i> Economy </NavLink>
                </NavItem>
                <NavItem>
                <NavLink to="/SocietyPage"><i class="fa fa-handshake-o fa-md"></i> Society </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/PoliticsPage"><i class="fa fa-university fa-md"/> Politics </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/LawPage"> <i class="fa fa-gavel fa-md"></i> Law </NavLink>
                </NavItem>
                -Blog Home-
            </nav>
        </ul>
    </div> 

    ) 
}

export default SideNavigation