import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const NavBar = (props) => {
  return (
    <div>
      <Nav>
        <NavItem>
          <NavLink href="#"><i className="fa fa-home fa-md"/> Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><i class="fa fa-coffee fa-md"/> Menu</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#"><i class="fa fa-book fa-md"/> Blog</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default NavBar;