import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ToyForm = (props) => {
    const {toy, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                    placeholder="What is the toy's name?"
                    name="name"
                    id="name"
                    value={ toy.name }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="description">Description</Form.Label>
                <Form.Control
                    placeholder="What kind of toy is this?"
                    name="description"
                    id="description"
                    value={ toy.description }
                    onChange={ handleChange }
                />
                <Form.Check
                    label="Is it squeaky?"
                    name="isSqueaky"
                    defaultChecked={ toy.isSqueaky  }
                    onChange={ handleChange }
                />
                <Form.Select 
                    aria-label="toy condition"
                    name="condition"
                    defaultValue={toy.condition}
                    onChange={handleChange}
                >
                    <option>What is the toy condition?</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="disgusting">Disgusting</option>
                </Form.Select>
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default ToyForm