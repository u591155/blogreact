import React from 'react';
import LawAdditionalR from '../AdditionalReads/LawReadsComponent';
import LawResource from '../Resources/LawResourceComponent';
import LawPost from '../PostBlog/lawPost';


function LawPage (){
    return(
        <div className="col">
             <LawPost />
        </div>     
    )
}

export default LawPage