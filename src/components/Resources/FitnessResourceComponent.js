import React, { Component } from 'react';

class FitnessResource extends Component {
    constructor(props){
      super(props);
      this.state = {
         resources: [
           {
             id:0,
             title: 'Older Adults And Exercise',
             text: 'Learn the benefits of exercise for older adults and how to get started.',
             link: 'https://www.nia.nih.gov/health/exercise-physical-activity', 
           },
                    {
             id:1,
             title: 'Tips For Home Workouts',
             text: 'There are so many options for exercising, here are some help to find yours..',
             link: 'https://www.shape.com/fitness/tips/our-25-all-time-best-workout-tips',  
           },
                    {
             id:2,
             title: 'Fitness Also Needs Diet',
             text: 'The word diet should not scare you, but is important for the body and mind.',
             link: 'https://www.healthline.com/health/fitness-exercise-eating-healthy#:~:text=Nutrition%20is%20important%20for%20fitness,as%20choosing%20vegetables%20over%20doughnuts.',  
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
                <br/>
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



export default FitnessResource;