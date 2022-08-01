import { useState } from 'react'
import PetForm from '../shared/PetForm';
import { createPet } from '../../api/pets';

const CreatePet = (props) => {
    // in unit 2, we assigned the user through the session
    // in this unit, we assign the user through the Token!
    console.log('these are the props in CreatePet \n', props)
    const [pet, setPet] = useState({
        name: '',
        type: '',
        age: '',
        adoptable: false,
    })
    console.log('this is pet in createPet', pet)
    // this will handle typing in the form!
    const handleChange = (e) => {
        setPet(prevPet => {
            let updatedValue = e.target.value;
            const updatedName = e.target.name;
            console.log('this is the input type', e.target.type)
            if (e.target.type === 'number') {
                // this is looking at the input type and changing it from the default, which is a string, into an actual number
                updatedValue = parseInt(e.target.value)
            }
            // this handles the checkbox, changing it on true etc
            if (updatedName === "adoptable" && e.target.checked) {
                updatedValue = true
            } else if (updatedName === "adoptable" && !e.target.checked) {
                updatedValue = false
            }
            const updatedPet = {
                [updatedName]: updatedValue
            }
            return {
                // we can spread out the previous object
                ...prevPet, 
                // AND the new one!
                // this will overwrite the stuff that changes in the previous state WHILE STILL keeping the new stuff!
                ...updatedPet
            }
        })
    }
    // we'll add a handleSubmit function here that makes an API request that handles the response
    const handleSubmit = (e) => {
        e.preventDefault();
        // createPet()
    }
    return (
        <>
            <PetForm 
                pet={ pet } 
                handleChange={ handleChange } 
                heading="Add a New Pet"
            />
        </>
    );
}

export default CreatePet;
