import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'
import ToyForm from '../shared/ToyForm';
import messages from '../shared/AutoDismissAlert/messages'
import { createToy } from '../../api/toys';

const NewToyModal = (props) => {
    console.log('here are the props in the NewPetModal', props)
    // these props come from the parent component
    const { 
        user, 
        pet,
        show, 
        handleClose, 
        msgAlert, 
        triggerRefresh, 
    } = props
    const [toy, setToy] = useState(props.toy)
    console.log('toy in toy modal', toy)
    const handleChange = (e) => {
        // we got this same function from create!
        setToy(prevToy => {
            let value = e.target.value;
            const name = e.target.name;
            if (name === "isSqueaky" && e.target.checked) {
                value = true
            } else if (name === "isSqueaky" && !e.target.checked) {
                value = false
            }
            const updatedToy = {
                [name]: value
            }
            return {
                ...prevToy, 
                ...updatedToy
            }
        })
    }
    const handleSubmit = (e) => {
        // this is where we put createToy! We need (user, petId)
        // once again, we get a similar function from createToy component
        e.preventDefault();
        // we want it to hit the createToy function
        createToy(user, pet._id, toy)
        // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            .then(() =>
                msgAlert({
                    heading: 'Create Toy Success',
                    message: messages.createToySuccess,
                    variant: 'success',
                })
            )
            // if successful, we need to trigger a refresh for the show page so we see the new information immediately
            // this refreshes the state of the toy component to the updated information!
            .then(()=> triggerRefresh())
            // this tells the user about an error
            .catch(msgAlert({
                heading: 'Create Toy Error',
                message: messages.createToyFailure,
                variant: 'danger',
            }))
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <ToyForm 
                    toy={toy}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Give the pet a toy!"
                />
            </Modal.Body>
        </Modal>
    );
}

export default NewToyModal;
