import React, { Component } from 'react';

class PoliticalAdditionalR extends Component {
    constructor(props){
      super(props);
      this.state = {
         addReads: [
           {
             id:0,
             image: 'assets/images/politics/politics1.png',
             text: 'Up coming elections and how do you vote safely! All you need to know about the up coming elections and what the plan is to keep voters safe.',
             description: 'voting', 
           },
                    {
             id:1,
             image: 'assets/images/politics/politics2.jpg',
             text: "Protest around the country continue: unity or unsafe? People stand up for a cause, but is it safe?",
             description: 'Protest',  
           },
                    {
             id:2,
             image: 'assets/images/politics/politics3.jpeg',
             text: 'Regulations are in place, but why arent people listening? Despite the regualtions in place it seems that many people are not listening to the expert. Could we be facing a potential shutdown?',
             description: 'California Governor',  
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
        <div className="container mt-5 mb-5">
         <hr />    
         <div className="row mx-auto">   
            {addReadCard}
        </div>    
        </div>  
      ); 
    }
  }



export default PoliticalAdditionalR;