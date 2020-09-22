import React, { Component } from 'react';

class SocietyResource extends Component {
    constructor(props){
      super(props);
      this.state = {
         resources: [
           {
             id:0,
             title: 'Shop Small And Help Your Community',
             text: 'Local business need help, find ways that you can shop the things you need local.',
             link: 'https://www.moneycrashers.com/shop-local-support-small-business-local-economy/', 
           },
                    {
             id:1,
             title: 'Local Events To Help You Stay Connected',
             text: 'Find out what is happening locally to stay connected about what is going on.',
             link: 'https://www.eventbrite.com/d/ca--san-francisco/community--events/',  
           },
                    {
             id:2,
             title: 'Society And Loss Of Housing',
             text: "Losing the place is very difficult, but there are many resources that can help.",
             link: 'https://chp-sf.org/properties-landing/',  
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



export default SocietyResource;