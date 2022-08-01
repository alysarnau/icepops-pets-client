import React from 'react';
import { 
    Container,
    Card,
    Button 
} from 'react-bootstrap';
import LoadingScreen from '../shared/LoadingScreen';
// import pet API functions
import { updatePet, getOnePet, removePet } from '../../api/pets';
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
import EditPetModal from './EditPetModal';
import NewToyModal from '../toys/NewToyModal';
import ShowToy from '../toys/ShowToy';

// we'll use a style object to lay out the toy cards
const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ShowPet = (props) => {
    const [pet, setPet] = useState(null)
    // for the edit pet modal!
    const [editModalShow, setEditModalShow] = useState(false) 
    // for the Toy modal!
    const [toyModalShow, setToyModalShow] = useState(false)
    // to let us know when to rerender!
    const [updated, setUpdated] = useState(false)

    // destructuring to get the id value from our route params
    const { id } = useParams();
    const navigate = useNavigate()
    // useNav returns a function
    // we can call that function to redirect the user wherever we want to

    const { user, msgAlert } = props;
    console.log('the pet in props', pet)
    console.log('user in props', user)
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
    }, [updated])
        // here we'll declare a function that runs which will remove the pet
    // this function's promise chain should send a message, and then go somewhere
    const removeThePet = () => {
        removePet(user, pet.id)
            // on success send a success message
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removePetSuccess,
                    variant: 'success'
                })
            })
            // then navigate to index
            .then(() => {navigate('/')})
            // on failure send a failure message
            .catch(err => {                   
                msgAlert({
                    heading: 'Error removing pet',
                    message: messages.removePetFailure,
                    variant: 'danger'
                })
            })
    }
    let toyCards
    if (pet) {
        if (pet.toys.length > 0) {
            toyCards = pet.toys.map(toy => (
                <ShowToy 
                    key={toy._id}
                    toy={toy}
                    pet={pet}
                    user={user}
                    msgAlert={msgAlert}
                />
            ))
        }
    }
    // If pet hasn't been loaded yet, show a loading message
    if (!pet) {
        return <LoadingScreen />
    }
    
    return (
        <>
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
                    <Card.Footer>
                        <Button 
                            onClick={() => setToyModalShow(true)}
                            className="m-2"
                            variant="info"
                        >
                            Give {pet.name} a Toy!
                        </Button>
                        {
                            pet.owner && user && pet.owner._id === user._id ? 
                                <>
                                    <Button 
                                        onClick={() => setEditModalShow(true)} 
                                        className="m-2" 
                                        variant="warning"
                                    >
                                        Edit Pet
                                    </Button> 
                                    <Button 
                                        onClick={() => removeThePet()} 
                                        className="m-2" 
                                        variant="danger"
                                    >
                                        Set the Pet Free
                                    </Button> 
                                </>
                                :
                                null
                        }
                    </Card.Footer>
                </Card>
            </Container>
            <Container style={cardContainerLayout}>
                {toyCards}
            </Container>
            <EditPetModal 
                user = {user}
                pet = {pet}
                show = {editModalShow}
                updatePet = {updatePet}
                msgAlert = {msgAlert}
                triggerRefresh  = {() => setUpdated(prev => !prev)}
                handleClose = {() => setEditModalShow((false))}
            />
            <NewToyModal 
                pet={pet}
                show={toyModalShow}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh  = {() => setUpdated(prev => !prev)}
                handleClose = {() => setToyModalShow((false))}
            />
        </>
    );
}

export default ShowPet;
