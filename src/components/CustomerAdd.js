import { Component } from "react";
import {Card, Form, Button, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faSave } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom"; 

import axios from "axios";

export default class Customer extends Component{

    constructor(props){
        super(props);
        //state object stores property values that belong to the component
        this.state = this.initialState;
        this.customerChange = this.customerChange.bind(this);
        this.submitCustomer = this.submitCustomer.bind(this);
    }

    initialState = {
        customerName: ''
    }

    resetCustomer = ()=>{
        this.setState(()=>this.initialState);
    }

    submitCustomer = event => {
        // alert('Customer Name: '+this.state.customerName+', Order Date: '+this.state.orderDate+', Delivery Date: '+this.state.deliveryDate+', Active Order: '+this.state.activeOrder+'');
        event.preventDefault();

        const customer = {
        customerName: this.state.customerName
        };

        axios.post("http://localhost:8080/customers/add", customer)
        .then(response => {
        if(response.data != null){
            this.setState(this.initialState);
            alert("Customer saved successfully");
        }
        });
    }

    customerChange = event => {
        this.setState({
        [event.target.name]:event.target.value
        });
    }

    
  //add new customer form
    render(){
        const {customerName} = this.state;

        return (
            <Card className="border border-dark formcard">
                <Card.Header>Add New Customer</Card.Header>
                <Form onReset ={this.resetCustomer} onSubmit={this.submitCustomer} id = "customerFormId">
                    <Card.Body>
                        <Form.Group as = {Col}>
                            <Form.Label>Customer Name</Form.Label>
                                <Form.Control required autoComplete="off"
                                type = "text" name ="customerName"
                                placeholder="Enter Customer Name"
                                value = {customerName}
                                onChange={this.customerChange}/>
                        </Form.Group>  
                    </Card.Body>
                    <Card.Footer>
                        <Button  variant = "success" type="submit">
                            <FontAwesomeIcon icon = {faSave}/>
                            Submit
                        </Button>{' '}
                        <Button  variant = "info" type="reset">
                            <FontAwesomeIcon icon = {faUndo}/>
                            Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        ) 
    }
}
