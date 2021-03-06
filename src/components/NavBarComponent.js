import React from 'react';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';


const NavBar = (props) => {
  return (
    <div>
      <Nav className="sticky-top">
        <NavItem>
          <NavLink className="nav-item" to="/Index"><i className="fa fa-home fa-md"/> Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/Menu"><i class="fa fa-coffee fa-md"/> Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="#"><i class="fa fa-book fa-md"/> Blog</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;