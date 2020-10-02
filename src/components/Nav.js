import React from 'react';
import { NavLink } from 'react-router-dom'

function Nav () {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
        <div className="container">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#theBlogNavBar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="theBlogNavBar">   
                <ul className="navbar-nav">
                    <NavLink className="mr-3 text-light" to="/Index"><i class="fa fa-home fa-md"/> Home </NavLink>
                    <NavLink className="mr-3 text-light" to="/Menu"><i class="fa fa-coffee fa-md"/> Menu</NavLink>
                    <NavLink className="mr-3 text-light" to="/HealthPage"><i class="fa fa-book fa-md"/> Blog</NavLink>
                </ul>
            </div>   
        </div> 
        </nav>
    )
}

export default Nav