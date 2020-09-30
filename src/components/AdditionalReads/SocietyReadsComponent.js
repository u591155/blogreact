import React, { Component } from 'react';

class SocietyAdditionalR extends Component {
    constructor(props){
      super(props);
      this.state = {
         addReads: [
           {
             id:0,
             image: 'assets/images/society/society2.jpeg',
             text: 'Your community is closer than you think! The community you live in only gets better when you know it exist.',
             description: 'Hands up', 
           },
                    {
             id:1,
             image: 'assets/images/society/society1.jpeg',
             text: 'Laying a helping hands is easy as to check in! Keeping in touch during these hard times is as easy as pushing a few buttons.',
             description: 'helping hands',  
           },
                    {
             id:2,
             image: 'assets/images/society/society3.jpg',
             text: 'Politics, Government, and Society they all mix! Find out how they are all related to each other and their relationship.',
             description: 'Murals',  
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



export default SocietyAdditionalR; 