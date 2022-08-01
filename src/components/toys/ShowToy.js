import React, { useState } from 'react';
import { Card,Button } from 'react-bootstrap'
// import EditToyModal when that's been built
// import removeToy for delete button
import { deleteToy } from '../../api/toys'

const ShowToy = (props) => {
    // destructure some props
    const { toy, pet, user, msgAlert, triggerRefresh } = props
    // here's where we'll put the hook to open the EditToyModal when we get there
    // this will set a color depending on the toy's condition
    const setBgCondition = (cond) => {
        if (cond === 'new') {
            return({width: '18rem', backgroundColor:'#b5ead7'})
        } else if (cond === 'used') {
            return({width: '18rem', backgroundColor:'#ffdac1'})
        } else {
            return({width: '18rem', backgroundColor:'#ff9aa2'})
        }
    }
    // call this to destroy a toy
    const destroyToy = () => {
        deleteToy(user, pet._id, toy._id)
            .then(() => {
                msgAlert({
                    heading: 'Toy Deleted',
                    message: 'Goodbye Toy',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            .catch(() => {
                msgAlert({
                    heading: 'error!!!',
                    message: 'Toy not deleted',
                    variant: 'danger'
                })
            })
    }
    return (
        <>
            <Card className='m-2' style={setBgCondition(toy.condition)}>
                <Card.Header>{toy.name}</Card.Header>
                <Card.Body>
                    <small>{toy.description}</small> <br />
                    <small>
                        Is it squeaky? {toy.isSqueaky ? 'squeak squeak' : 'stoic silence'}
                    </small>
                </Card.Body>
                <Card.Footer>
                    <small>Condition: {toy.condition}</small>
                    {
                        user && user._id === pet.owner._id
                        ?
                        <div>
                            <Button 
                                variant="warning" 
                                className="m-2"
                            >
                                Edit Toy
                            </Button>
                            <Button 
                                variant="danger" 
                                className="m-2"
                                onClick={() => destroyToy()}
                            >
                                Delete Toy
                            </Button>
                        </div> :
                        null
                    }
                </Card.Footer>
            </Card>
        </>
    );
}

export default ShowToy;
