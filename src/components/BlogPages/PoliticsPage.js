import React from 'react';
import PoliticalAdditionalR from '../AdditionalReads/PoliticsReadsComponent';
import PoliticsResource from '../Resources/PoliticsResourceComponent';
import PoliticsPost from '../PostBlog/politicsPost';

function PoliticsPage (){
    return(
        <div className="col">
            <PoliticsPost />
        </div>
    )
}

export default PoliticsPage