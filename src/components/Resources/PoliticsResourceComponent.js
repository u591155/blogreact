import React, { Component } from 'react';

class PoliticsResource extends Component {
    constructor(props){
      super(props);
      this.state = {
         resources: [
           {
             id:0,
             title: 'Political Indicators',
             text: 'Here are some ways to stay informed about the current political climate and indicatiors.',
             link: 'https://www.politicalresources.com/', 
           },
                    {
             id:1,
             title: 'Public Policy',
             text: 'What is a policy can be hard to understand, specially when some might seem like common sense.',
             link: 'https://agb.org/public-policy-resources/',  
           },
                    {
             id:2,
             title: 'COVID-19 & Politics',
             text: "Politics right now cannot be talked about side by side with the current pandemic, and here we show you why.",
             link: 'https://www.chathamhouse.org/',  
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



export default PoliticsResource;