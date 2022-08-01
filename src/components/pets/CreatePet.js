import { useState } from 'react'
import PetForm from '../shared/PetForm';

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
    // this will handle typing in the form!
    const handleChange = (e) => {
        setPet(prevPet => {
            const updatedValue = e.target.value;
            const updatedName = e.target.name;
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

    }
    return (
        <div>
            <PetForm pet={ pet } handleChange={ handleChange }/>
        </div>
    );
}

export default CreatePet;
