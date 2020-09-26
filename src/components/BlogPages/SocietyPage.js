import React from 'react';
import SocietyAdditionalR from './components/AdditionalReads/SocietyReadsComponent';
import SocietyResource from './components/Resources/SocietyResourceComponent';
import SocietyPost from './components/PostBlog/societyPost';

function SocietyPage (){
    return(
        <div className="contianer">
            <SocietyPost />
            <SocietyResource />
            <SocietyAdditionalR />
        </div>
    )
}

export default SocietyPage