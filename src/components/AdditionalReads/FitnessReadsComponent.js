import React, { Component } from 'react';

class FitnessAdditionalR extends Component {
    constructor(props){
      super(props);
      this.state = {
         addReads: [
           {
             id:0,
             image: 'assets/images/fitness/pump.jpg',
             text: 'Become a pro mountain biker in 30 days! Ever wanted to know how they do it? we give you 10 tips',
             description: 'person on bike', 
           },
                    {
             id:1,
             image: 'assets/images/fitness/pump1.jpg',
             text: 'Track runner secrets to become faster! 3 simple things you can do to fall in love with running',
             description: 'person running',  
           },
                    {
             id:2,
             image: 'assets/images/fitness/pump3.jpg',
             text: 'Running in you favorite places to motivate you! Finding your favorite place could help you stay focus',
             description: 'person running',  
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
         <div className="row mx-auto">   
            {addReadCard}
        </div>    
        </div>  
      ); 
    }
  }



export default FitnessAdditionalR; 
