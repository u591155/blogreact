import React, { Component } from 'react';

class EconomyAdditionalR extends Component {
    constructor(props){
      super(props);
      this.state = {
         addReads: [
           {
             id:0,
             image: 'assets/images/economy/economy1.png',
             text: 'Save Money Help Business Small Business! Shopping locally not only helps you pocket, but it helps them stay in business.',
             description: 'Grocery', 
           },
          {
             id:1,
             image: 'assets/images/economy/economy2.jpg',
             text: "Count Your pennies: 5 tips on how every penny counts! Find ways to make your money last during these difficult times.",
             description: 'Money',  
           },
                    {
             id:2,
             image: 'assets/images/economy/economy3.jpg',
             text: 'Restaurant style recepies in your kitchen! Ways to help you enjoy lavish dinning in a budget.',
             description: 'food',  
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



export default EconomyAdditionalR;