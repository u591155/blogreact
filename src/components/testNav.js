import React from 'react';
import { NavLink } from 'react-router-dom'

function TestNav () {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark sticky-top">
        <div className="container">
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#theBlogNavBar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="theBlogNavBar">   
                <ul className="navbar-nav">
                    <li className="nav-item"><a class="nav-link" href="index.html"><i class="fa fa-home fa-md"/> Home</a></li>
                    <li className="nav-item"><a class="nav-link" href="menu.html"><i class="fa fa-coffee fa-md"/> Menu</a></li>
                    <li className="nav-item active"><a class="nav-link" href="home_blog.html"><i class="fa fa-book fa-md"/> Blog</a></li>
                </ul>
            </div>   
        </div> 
        </nav>
    )
}

export default TestNav