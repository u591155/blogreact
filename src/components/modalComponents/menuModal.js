import React, { useState } from "react";
import { menuData } from "../sharedData/sharedData";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function menuModal() {
	const [modal, setModal] = useState(false);

	const toggle = () => setModal(!modal);

	return (
		<div>
			<i className='fa fa-usd fa-lg' color='danger' onClick={toggle} />
			<br />
			Menu
			<Modal isOpen={modal} toggle={toggle}>
				<ModalHeader text='center' toggle={toggle}>
					Menu Resources
				</ModalHeader>
				<ModalBody>
					<menu />
				</ModalBody>
				<ModalFooter>
					<Button color='danger' onClick={toggle}>
						Cancel
					</Button>
				</ModalFooter>
			</Modal>
		</div>
	);
}

const MenuCard = menuData.map((resource) => {
	return (
		<div className='card-body'>
			<h5 className='card-title'>{resource.title}</h5>
			<div className='card-text'>{resource.text}</div>
			<br />
			<a
				href={resource.price}
				rel='noopener noreferrer'
				className='btn btn-danger'>
				Go
			</a>
			<hr />
		</div>
	);
});

function menu() {
	return (
		<div className='container'>
			<div className='row'>{MenuCard}</div>
		</div>
	);
}

export default menuModal;
