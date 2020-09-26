import React from 'react';
import HealthAdditionalR from '../AdditionalReads/HealthReadsComponent';
import HealthResource from '../Resources/HealthResourceComponent';
import HealthPost from '../PostBlog/healthPost';

function HealthPage (){
    return(
        <div className="container">
            <HealthPost />
            <HealthResource />
            <HealthAdditionalR />
        </div>
    )
}

export default HealthPage