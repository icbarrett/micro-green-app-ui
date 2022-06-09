import React, { Component } from 'react';
import { Button, Container } from 'react-bootstrap';

class Confirm extends Component{

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    };

    render(){
        const {inputValues:{orderDate, deliveryDate,qty,seedName,trayType,customerName}} = this.props;

        return(
            <Container>
                <h1>Confirm your Details</h1>
                <p>Confirm if the following details are correct.</p>
                <p>Customer Name: {customerName}</p>
                <p>Order Quantity: {qty}</p>
                <p>Seed Name: {seedName}</p>
                <p>Tray Type: {trayType}</p>
                <Button variant="secondary" onClick={this.back}>Back</Button>{' '}
                <Button variant="primary" onSubmit={this.handleSubmit}>Confirm</Button>
            </Container>
        )
    }
}

export default Confirm;