import React from 'react';
import EconomyAdditionalR from '../Resources/EconomyResourceComponent';
import EconomyPost from '../PostBlog/economyPost';
import EconomyResource from '../Resources/EconomyResourceComponent';

function EconomicPage () {
    return(
        <div className="container">
            <EconomyPost />
            <EconomyAdditionalR />
            <EconomyResource />
        </div>
    )
}

export default EconomicPage