import { Component } from "react";
import {Card, Form, Button, Col} from 'react-bootstrap'

export default class Orders extends Component{

  constructor(props){
    super(props);
    //state object stores property values that belong to the component
    this.state = {orderId:'', customerName: '', orderDate: '', deliveryDate: '', activeOrder:'' };
    this.orderChange = this.orderChange.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  submitOrder(event){

    alert('Customer Name: '+this.state.customerName+', Order Date: '+this.state.orderDate+', Delivery Date: '+this.state.deliveryDate+', Active Order: '+this.state.activeOrder+'');
    event.preventDefault();
  }

  orderChange(event){
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  //add new order form
  render(){
    return (
      <Card className="border border-dark ">
        <Card.Header>Add New Order</Card.Header>
        <Form onSubmit={this.submitOrder} id = "orderFormId">
          <Card.Body>
    <Form.Group as = {Col}>
    <Form.Label>Customer Name</Form.Label>
    <Form.Control required controlid = "formGridCustomerName"
    type = "text" name ="customerName"
    placeholder="Enter Customer Name"
    value = {this.state.customerName}
    onChange={this.orderChange}/>
  </Form.Group>  
  <Form.Group as = {Col}>
    <Form.Label>Order Date</Form.Label>
    <Form.Control type = "text" name = "orderDate"
    placeholder="Enter Order Date"
    value = {this.state.orderDate}
    onChange={this.orderChange}/>
  </Form.Group>
  <Form.Group as = {Col}>
    <Form.Label>Delivery Date</Form.Label>
    <Form.Control type = "text" name = "deliveryDate"
    placeholder="Enter Delivery Date"
    value = {this.state.deliveryDate}
    onChange={this.orderChange}/>
  </Form.Group>
  <Form.Group as ={Col}>
    <Form.Label>Active Order</Form.Label>
    <Form.Control type = "text" name = "activeOrder"
    placeholder="Enter Order Status"
    value = {this.state.activeOrder}
    onChange={this.orderChange}/>
  </Form.Group>
  </Card.Body>
<Card.Footer>
  <Button  variant = "success" type="submit">
    Submit
  </Button>
  </Card.Footer>
  </Form>
  </Card>
    ) 
}
}