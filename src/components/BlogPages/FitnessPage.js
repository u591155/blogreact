import React from 'react';
import FitnessAdditionalR from '../AdditionalReads/FitnessReadsComponent';
import FitnessResource from '../Resources/FitnessResourceComponent';
import FitnessPost from '../PostBlog/fitnessPost';

function FitnessPage (){
    return (
        <div className='container'>
            <FitnessPost />
            <FitnessResource />
            <FitnessAdditionalR />
        </div>
    )
}

export default FitnessPage