import React, { useState } from 'react';
import { lawData } from '../sharedData/sharedData';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function LawModal() {
    const [modal, setModal] = useState(false);
  
    const toggle = () => setModal(!modal);
  
    return (
      <div>
        <i className="fa fa-eye fa-lg" color="danger" onClick={toggle}/>
        <br/>
        Law
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader text="center" toggle={toggle}>Fitness Resources</ModalHeader>
          <ModalBody>
            <Law />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

const ResourceCard = lawData.map(resource => {
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

function Law(){
    return (
        <div className="container">
            <div className="row">   
                {ResourceCard}
            </div>    
        </div>  
    ); 
}

export default LawModal;