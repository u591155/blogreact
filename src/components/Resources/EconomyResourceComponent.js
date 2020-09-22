import React, { Component } from 'react';

class EconomyResource extends Component {
    constructor(props){
      super(props);
      this.state = {
         resources: [
           {
             id:0,
             title: 'Government Services And Information',
             text: 'Partnering with federal agencies, we reach out to people where they are, to connect them with their government',
             link: 'https://www.usa.gov/', 
           },
                    {
             id:1,
             title: 'Economic knowledge',
             text: 'The Balance makes personal finance easy to understand. It is home to experts who provide clear, practical advice on managing your money.',
             link: 'https://www.thebalance.com/about-us',  
           },
                    {
             id:2,
             title: 'Loans And Credit',
             text: 'Everyone needs help when looking to make purchases whether big or small, so here we help you shine some light with comparisons',
             link: 'https://www.nerdwallet.com/blog/finance/how-to-build-a-budget/',  
           },
         ] 
      };
    }
    render(){
      const ResourceCard = this.state.resources.map(resource => {
        return (
          <div className="col-sm-8 col-md-6 col-lg">     
            <div className="card-body">
                <h5 className="card-title">{resource.title}</h5>
                <div className="card-text">{resource.text}</div>
                <br />
                <a href={resource.link} target="_blank" rel="noopener noreferrer" className="btn btn-danger">Go</a>
            </div>
          </div> 
        );
      });
      
      return (
        <div className="container mt-5 mb-5">
        <h3 class="text-dark text-center">Resource</h3>
            <div className="row mx-auto">
                  
                {ResourceCard}
            </div>    
        </div>  
      ); 
    }
  }



export default EconomyResource;