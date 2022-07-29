import { useState } from 'react'
import PetForm from '../shared/PetForm';

const CreatePet = () => {
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
    return (
        <div>
            <PetForm pet={ pet } handleChange={ handleChange }/>
        </div>
    );
}

export default CreatePet;
