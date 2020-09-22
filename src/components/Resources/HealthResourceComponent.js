import React, { Component } from 'react';

class HealthResource extends Component {
    constructor(props){
      super(props);
      this.state = {
         resources: [
           {
             id:0,
             title: 'Mental Health',
             text: 'Taking care of your health should not be hard and should be made a priority',
             link: 'https://www.onemedical.com/services/mentalhealth/?gclid=Cj0KCQjw7Nj5BRCZARIsABwxDKKLgjeODtGWbu0sDY4OWQXZG083kIsIltLt0B5HSLnmFaSjDpjpq6oaAmhZEALw_wcB', 
           },
                    {
             id:1,
             title: 'Help With Addiction',
             text: 'Addictions is difficult to deal with, but there are many places that can lay a hand',
             link: 'https://www.samhsa.gov/find-help/national-helpline',  
           },
                    {
             id:2,
             title: 'Anxiety a silent enemy',
             text: "Just because you don't see it anxiety and depression are real, find help",
             link: 'https://www.crisistextline.org/topics/anxiety/?gclid=Cj0KCQjw7Nj5BRCZARIsABwxDKKUEOubqWIXzj0Jc1vLl16V0llH7KuQcVLuzrVe6akkFRZxvF-QbycaAhZpEALw_wcB#what-is-anxiety-1',  
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



export default HealthResource;