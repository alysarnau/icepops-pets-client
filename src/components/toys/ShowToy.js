import React, { useState } from 'react';
import { Card,Button } from 'react-bootstrap'
// import EditToyModal when that's been built
// import removeToy for delete button

const ShowToy = (props) => {
    // destructure some props
    const { toy, pet, user } = props
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
    return (
        <>
            <Card className='m-2'>
                <Card.Header>{toy.name}</Card.Header>
                <Card.Body>
                    <small>{toy.description}</small> <br />
                    <small>
                        Is it squeaky? {toy.isSqueaky ? 'squeak squeak' : 'stoic silence'}
                    </small>
                </Card.Body>
                <Card.Footer>
                    <small>Condition: {toy.condition}</small>
                </Card.Footer>
            </Card>
        </>
    );
}

export default ShowToy;
