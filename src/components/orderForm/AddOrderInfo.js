import React from 'react'
import { Form, Button, Col, Container } from 'react-bootstrap';
import { Component } from 'react';

class AddOrderInfo extends Component{

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
                            <Form.Group as={Col} controlId="formOrderDate">
                                <Form.Label className="label">Order Date</Form.Label>
                                <Form.Control
                                type="date"
                                defaultValue={this.props.inputValues.orderDate}
                                name="orderDate"
                                required
                                onChange={this.props.handleChange}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formDeliveryDate">
                                <Form.Label className="label">Delivery Date</Form.Label>
                                <Form.Control
                                type="date"
                                defaultValue={this.props.inputValues.deliveryDate}
                                name="deliveryDate"
                                required
                                onChange={this.props.handleChange}
                                />
                            </Form.Group>
                        </Form.Row>
                        <Form.Group as={Col} controlId="formOrderQty">
                                <Form.Label className="label">Order Quantity</Form.Label>
                                <Form.Control
                                type="number"
                                defaultValue={this.props.inputValues.qty}
                                name="orderDetails.qty"
                                required
                                onChange={this.props.handleChange}
                                />
                            </Form.Group>
                        <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                        <Button variant="primary" onClick={this.saveAndContinue}>Next</Button>
                    </Form>
                </Container>
        );
    }
}

export default AddOrderInfo;
