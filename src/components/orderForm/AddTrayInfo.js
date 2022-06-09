import React from 'react'
import { Component } from 'react';
import { Form, Button, Col, Container } from 'react-bootstrap';

class AddTrayInfo extends Component{

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
                        <Form.Group as={Col} controlId="formTrayType">
                                <Form.Label>Tray Type</Form.Label>
                                <Form.Control as="select" name="orderDetails.tray.trayType" defaultValue={this.props.inputValues.trayType} onChange={this.props.handleChange}>
                                    <option value="cracked">Cracked lid</option>
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

export default AddTrayInfo;
