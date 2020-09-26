import React from 'react';

function SideNavigation(){
    return(
        <div className="col-sm-5 col-md-4 col-lg-3 col-xl-2 d-none d-sm-block mt-5 border-right">
        <h3 className="text-dark ml-3 border-bottom">Topics</h3>
        <ul className="list-unstyled" class="blogItems">
            <nav class="nav flex-column">
                <i class="fa fa-user-md fa-md"></i> Health
                <i class="fa fa-child fa-md"></i> Fitness
                <i class="fa fa-money fa-md"></i> Economy
                <i class="fa fa-handshake-o fa-md"></i> Society
                <i class="fa fa-university fa-md"></i> Politics
                <i class="fa fa-gavel fa-md"></i> Law
                -Blog Home-
            </nav>
        </ul>
    </div> 

    ) 
}

export default SideNavigation