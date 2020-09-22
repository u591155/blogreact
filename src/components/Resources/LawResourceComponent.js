import React, { Component } from 'react';

class LawResource extends Component {
    constructor(props){
      super(props);
      this.state = {
         resources: [
           {
             id:0,
             title: 'American Civil Liberties Union',
             text: 'With 100 years of experience fighting for rights, they are experts on change.',
             link: 'https://www.aclu.org/', 
           },
                    {
             id:1,
             title: "Lawyer's Directory",
             text: 'Help finding a lawyer and tips on what you can do to protect your rights.',
             link: 'https://www.avvo.com/',  
           },
                    {
             id:2,
             title: 'Evictions And Your Rights',
             text: "In big cities most people rent, but what happens if you can't pay?",
             link: 'https://flip.lease/learn/being-evicted/eviction-laws',  
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



export default LawResource;