import React, { Component } from 'react';

class HealthAdditionalR extends Component {
    constructor(props){
      super(props);
      this.state = {
         addReads: [
           {
             id:0,
             image: 'assets/images/health/health1.jpg',
             text: 'Health is a balance, but what does that means? Starting a new journey requires an explanation',
             description: 'Health is a balance', 
           },
                    {
             id:1,
             image: 'assets/images/health/health2.jpg',
             text: 'Health starts with ourselves and others around us! Health journey for you and your loved ones help you stay focus',
             description: 'happy croud',  
           },
                    {
             id:2,
             image: 'assets/images/health/health3.jpeg',
             text: 'Caring about yourself is an important selfish act! 10 tips to making sure that you find your best self',
             description: 'People at the beach',  
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



export default HealthAdditionalR; 