import { Component } from "react";
import {Card, Form, Button, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faSave } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

export default class Orders extends Component{

  constructor(props){
    super(props);
    //state object stores property values that belong to the component
    this.state = this.initialState;
    this.orderChange = this.orderChange.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  initialState = {
    customerName: '', seedName: '', qty:'', orderDate: '', deliveryDate: ''
  }

  resetOrder = ()=>{
    this.setState(()=>this.initialState);
  }

  submitOrder = event => {
    // alert('Customer Name: '+this.state.customerName+', Order Date: '+this.state.orderDate+', Delivery Date: '+this.state.deliveryDate+', Active Order: '+this.state.activeOrder+'');
    event.preventDefault();

    const order = {
      customerName: this.state.customerName,
      seedName: this.state.seedName,
      qty: this.state.qty,
      orderDate: this.state.orderDate,
      deliveryDate: this.state.deliveryDate
    };

    axios.post("http://localhost:8080/orders/create", order)
    .then(response => {
      if(response.data != null){
        this.setState(this.initialState);
        alert("Order saved successfully");
      }
    });
  }

  orderChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  //add new order form
  render(){
    const {customerName, seedName, qty, orderDate, deliveryDate} = this.state;

    return (
      <Card className="border border-dark ">
        <Card.Header>Add New Order</Card.Header>
        <Form onReset ={this.resetOrder} onSubmit={this.submitOrder} id = "orderFormId">
          <Card.Body>
    <Form.Group as = {Col}>
    <Form.Label>Customer Name</Form.Label>
    <Form.Control required autoComplete="off"
    type = "text" name ="customerName"
    placeholder="Enter Customer Name"
    value = {customerName}
    onChange={this.orderChange}/>
  </Form.Group>  
  <Form.Group as = {Col}>
    <Form.Label>Seed Name</Form.Label>
    <Form.Control required autoComplete="off"
     type = "text" name = "seedName"
    placeholder="Enter Seed Name"
    value = {seedName}
    onChange={this.orderChange}/>
  </Form.Group>
  <Form.Group as = {Col}>
    <Form.Label>Tray Quantity</Form.Label>
    <Form.Control required autoComplete="off"
     type = "text" name = "qty"
    placeholder="Enter Tray Quantity"
    value = {qty}
    onChange={this.orderChange}/>
  </Form.Group>
  <Form.Group as = {Col}>
    <Form.Label>Order Date</Form.Label>
    <Form.Control required autoComplete="off"
    type = "text" name = "orderDate"
    placeholder="Enter Order Date"
    value = {orderDate}
    onChange={this.orderChange}/>
  </Form.Group>
  <Form.Group as = {Col}>
    <Form.Label>Delivery Date</Form.Label>
    <Form.Control required autoComplete="off"
    type = "text" name = "deliveryDate"
    placeholder="Enter Delivery Date"
    value = {deliveryDate}
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
  </Form>
  </Card>
    ) 
}
}