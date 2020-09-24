import React, { useState } from 'react';
import { healthData } from '../sharedData/sharedData';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function HealthModal() {
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <i className="fa fa-heartbeat fa-lg" color="danger" onClick={toggle}/>
        <br/>
        Health
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader text="center" toggle={toggle}>Fitness Resources</ModalHeader>
          <ModalBody>
            <Health />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

const ResourceCard = healthData.map(resource => {
    return (    
        <div className="card-body">
            <h5 className="card-title">{resource.title}</h5>
            <div className="card-text">{resource.text}</div>
            <br/>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="btn btn-danger">Go</a>
            <hr />
        </div>
    );
});

function Health(){
    return (
        <div className="container">
            <div className="row">   
                {ResourceCard}
            </div>    
        </div>  
    ); 
}

export default HealthModal;