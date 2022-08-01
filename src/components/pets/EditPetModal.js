import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import PetForm from '../shared/PetForm';
import messages from '../shared/AutoDismissAlert/messages'

const EditPetModal = (props) => {
    console.log('here are the props in the EditPetModal', props)
    // these props come from the parent component
    const { 
        user, 
        show, 
        handleClose, 
        updatePet, 
        msgAlert, 
        triggerRefresh, 
    } = props
    const [pet, setPet] = useState(props.pet)
    console.log('pet in edit modal', pet)
    const handleChange = (e) => {
        // we got this same function from create!
        setPet(prevPet => {
            let updatedValue = e.target.value;
            const updatedName = e.target.name;
            if (e.target.type === 'number') {
                updatedValue = parseInt(e.target.value)
            }
            if (updatedName === "adoptable" && e.target.checked) {
                updatedValue = true
            } else if (updatedName === "adoptable" && !e.target.checked) {
                updatedValue = false
            }
            const updatedPet = {
                [updatedName]: updatedValue
            }
            return {
                ...prevPet, 
                ...updatedPet
            }
        })
    }
    const handleSubmit = (e) => {
        // this is where we put updatePet! We need (user, updatedPet)
        // once again, we get a similar function from createPet component
        e.preventDefault();
        // we want it to hit the updatePet function
        updatePet(user, pet)
        // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            .then(() =>
                msgAlert({
                    heading: 'Update Pet Success',
                    message: messages.updatePetSuccess,
                    variant: 'success',
                })
            )
            // if successful, we need to trigger a refresh for the show page so we see the new information immediately
            // this refreshes the state of the pet component to the updated information!
            .then(()=> triggerRefresh())
            // this tells the user about an error
            .catch(msgAlert({
                heading: 'Update Pet Error',
                message: messages.updatePetFailure,
                variant: 'danger',
            }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <PetForm 
                    pet={pet}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update Pet"
                />
            </Modal.Body>
        </Modal>
    );
}

export default EditPetModal;
