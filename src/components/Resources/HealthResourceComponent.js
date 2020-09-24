import React, { Component } from 'react';
import { healthData }  from '../sharedData/sharedData'

class HealthResource extends Component {
    constructor(props){
      super(props);
      this.state = {
        healthData  
      };
    }
    render(){
      const ResourceCard = this.state.healthData.map(resource => {
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



export default HealthResource;