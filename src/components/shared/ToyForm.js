import React, {useState} from 'react'
import {
    Form,
    Button,
    Container
} from 'react-bootstrap'

// toy model fields:
// name, condition(enum)

const ToyForm = (props) => {
    const { toy, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor='Name'>Name</Form.Label>
                <Form.Control 
                    name="name" 
                    id="Name" 
                    type="text" 
                    placeholder="What is the toy's name"
                    value={ toy.name }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='description'>Description</Form.Label>
                <Form.Control 
                    name="description" 
                    id="description" 
                    type="text" 
                    placeholder="What kind of toy is this?"
                    value={ toy.description }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor='isSqueaky'>Is it squeaky?</Form.Label>
                <Form.Check
                    label="Is it squeaky?" 
                    id="isSqueaky" 
                    name="isSqueaky"
                    defaultChecked={ toy.isSqueaky }
                    onChange={ handleChange }
                />
                <Form.Select 
                    aria-label="toy-condition"
                    name="condition" 
                    defaultChecked={ toy.condition }
                    onChange={ handleChange }
                >
                    <option>Open this select menu</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="disgusting">Disgusting</option>
                </Form.Select>
                <Button 
                    variant="primary" 
                    type="submit"
                >
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default PetForm;
