import React from 'react';
import { 
    Container,
    Card 
} from 'react-bootstrap';
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
        <Container className='fluid'>
            <Card>
                <Card.Header>{ pet.fullTitle }</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <div><small>Age: { pet.age }</small></div>
                        <div><small>Type: { pet.type }</small></div>
                        <div><small>
                            Adoptable: { pet.adoptable ? 'yes' : 'no'}
                        </small></div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ShowPet;
