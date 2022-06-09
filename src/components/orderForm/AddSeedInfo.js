import React from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap';
import { Component } from 'react';

class AddSeedInfo extends Component{

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };


    render() {
        return( <Container>
                    <Form>
                        <Form.Row>
                        <Form.Group as={Col} controlId="formseedName">
                                <Form.Label>Seed Name</Form.Label>
                                <Form.Control as="select" name="orderDetails.seed.seedName" defaultValue={this.props.inputValues.seedName} onChange={this.props.handleChange}>
                                    <option value="Peas">Peas</option>
                                    <option value="Broccoli">Broccoli</option>
                                </Form.Control>
                            </Form.Group>
                        </Form.Row>
                        <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                        <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
                    </Form>
                </Container>
        );
    }
}

export default AddSeedInfo;
