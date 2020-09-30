import React, { Component } from 'react';

class LawAdditionalR extends Component {
    constructor(props){
      super(props);
      this.state = {
         addReads: [
           {
             id:0,
             image: 'assets/images/law/law1.jpeg',
             text: 'Lady liberty: is she in our side, or did she forget about us? The most controversial cases since the start of the year that will not be forgotten.',
             description: 'Lady Liberty', 
           },
                    {
             id:1,
             image: 'assets/images/law/law2.jpg',
             text: "Court are closed, but it doesn't mean you can't get in troube. Follow the law they can still get you and your case could delay, but what does that mean?",
             description: 'Empty Court Room',  
           },
                    {
             id:2,
             image: 'assets/images/law/law3.jpg',
             text: 'Know your rights when you protest! Here are some of the most besic rights people have that they do not know they have.',
             description: 'Protest',  
           },
         ] 
      };
    }
    render(){
      const addReadCard = this.state.addReads.map(addRead => {
        return (
          <div className="col-sm-8 col-md-6 col-lg">   
            <div className="card-body">
              <img class="card-img-top" width="100%" src={addRead.image} alt={addRead.description} />
              <div className="card-text">{addRead.text}</div>
              <a href="/" className="btn btn-primary">Find out</a>
            </div>
          </div> 
        );
      });
      
      return (
        <div className="container mb-5">
         <hr />    
         <div className="row mx-auto">   
            {addReadCard}
        </div>    
        </div>  
      ); 
    }
  }



export default LawAdditionalR; 