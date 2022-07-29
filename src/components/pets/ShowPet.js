import React from 'react';
import LoadingScreen from '../shared/LoadingScreen';
// import getOnePet function
import { getOnePet } from '../../api/pets';
// this will allow us to set our params
import { useParams } from 'react-router-dom';
import { 
    useState, 
    useEffect 
} from 'react'

const ShowPet = () => {
    const [pet, setPet] = useState(null)
    // destructuring to get the id value from our route params
    const { id } = useParams();
    useEffect(() => {
        getOnePet(id)
            .then(res => setPet(res.data.pet))
            .catch(err => console.error(err))
    }, [])
    // console.log('id param in showPet', id)
    // If pet hasn't been loaded yet, show a loading message
    if (!pet) {
        return <LoadingScreen />
    }
    
    
    return (
        <>
            <p>This is the show pet component for { id }.</p>
        </>
    );
}

export default ShowPet;
