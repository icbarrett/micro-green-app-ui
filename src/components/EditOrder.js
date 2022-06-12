import { Component } from "react";
import {Card, Form, Button, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faSave } from "@fortawesome/free-solid-svg-icons";

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
        orderDetails:[
                {
                    qty: ''
                }
        ]
        
    }

//     resetCustomer = ()=>{
//         this.setState(()=>this.initialState);
//     }

    submitOrder = event => {
        event.preventDefault();

        const order = {
            orderDetails:[
                {
                    qty: this.state.qty
                }
            ]
        
        };

        axios.put("http://localhost:8080/orders/{order.orderId}")
        .then(response => {
        if(response.data != null){
            this.setState(this.initialState);
            alert("Order updated successfully");
        }
        });
    }

    orderChange = event => {
        this.setState({
        [event.target.name]:event.target.value
        });
    }
  //edit new customer form
    render(){
        const {qty} = this.state;
// 
        return (
            <Card className="border border-dark ">
                {/* <Card.Header>Add New Customer</Card.Header> */}
                {/* <Form onReset ={this.resetCustomer} onSubmit={this.submitCustomer} id = "customerFormId"> */}
                    <Card.Body>
                        <Form.Group as = {Col}>
                            <Form.Label>Order Quantity</Form.Label>
                                <Form.Control required autoComplete="off"
                                type = "number" name ="qty"
                                placeholder="Enter Order Quantity"
                                value = {qty}
                                onChange={this.orderChange}/>
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
                {/* </Form> */}
            </Card>
        ) 
    }
}
