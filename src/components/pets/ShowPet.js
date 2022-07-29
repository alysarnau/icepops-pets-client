import React from 'react';
import LoadingScreen from '../shared/LoadingScreen';
// import getOnePet function
import { getOnePet } from '../../api/pets';
// this will allow us to set our params
import { 
    useParams,
    useNavigate 
} from 'react-router-dom';
// useNav will allow us to navigate to a specific page
// for error messages
import messages from '../shared/AutoDismissAlert/messages'
import { 
    useState, 
    useEffect 
} from 'react'

const ShowPet = (props) => {
    const [pet, setPet] = useState(null)

    // destructuring to get the id value from our route params
    const { id } = useParams();
    const navigate = useNavigate()
    // useNav returns a function
    // we can call that function to redirect the user wherever we want to

    const { msgAlert } = props;
    useEffect(() => {
        getOnePet(id)
            .then(res => setPet(res.data.pet))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting pet',
                    body: messages.getPetsFailure,
                    variant: 'danger',
                })
                // navigate back to the home page if there's an error fetching
                navigate('/');
            })
    }, [])
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
