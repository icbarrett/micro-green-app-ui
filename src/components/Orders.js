import React, { Component} from "react";
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
    
      orderDate: new Date().toISOString().split('T', 1).toString(),
      deliveryDate: "2022-06-20",
      activeOrder: false,
      customer: {customerId: 1,
                  customerName: "Ingrid"},
      orderDetails: [
          {
              qty: 1,
              seed: {
                  seedId: 1,
                  seedName: "peas",
                  seedingDensity: 1,
                  seedPresoak: true,
                  blackoutTime: 7,
                  harvestTime: 10,
                  lot: null,
                  qty: 500,
                  status: null
              },
              tray: {
                  trayId: 1,
                  trayType: "base tray",
                  size: "10x20",
                  qty: 30,
                  plantingMedium: null
              }
          }
      ]
  }




    // customerId:null,
    // orderDate: '2022-06-12',
    // deliveryDate: '',
    // orderDetails: [ 
    //   {
    //   qty: "",
    // seed: {
    //   seedName: ""
    // },
    // tray:{
    //   trayType:""
    // }
    //   }
    // ],
    // // customer:{
    // //   customerName:''
    // // },
    // customerObject:{}
    // }
  

  resetOrder = ()=>{
    this.setState(()=>this.initialState);
  }

  submitOrder = event => {
    // alert('Customer Name: '+this.state.customerName+', Order Date: '+this.state.orderDate+', Delivery Date: '+this.state.deliveryDate+', Active Order: '+this.state.activeOrder+'');
    event.preventDefault();

    const order = {
      orderDate: this.state.orderDate,
      deliveryDate: this.state.deliveryDate,
      customer: this.state.customer,
      // customer:{
      // customerName: this.state.customerName
      // },
      orderDetails: this.state.orderDetails
    };

    axios.post("http://localhost:8080/orders/create", order)
    .then(response => {
      console.log(response)
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
    const { customer,/* customerName,*/ seedName, trayType, qty, orderDate, deliveryDate} = this.state;

    return (
      <Card className="border border-dark ">
        <Card.Header>Add New Order</Card.Header>
        <Form onReset ={this.resetOrder} onSubmit={this.submitOrder} id = "orderFormId">
          <Card.Body>

          <Form.Group as = {Col}>
            <Form.Label>Order Date</Form.Label>
            <Form.Control required autoComplete="off"
            type = "date" name = "orderDate"
            placeholder="YYYY-MM-DD"
            value = {orderDate}
            onChange={this.orderChange}/>
    </Form.Group>

          {/* <Form.Group as = {Col}>
            <Form.Label>Search for Customer</Form.Label>
            <Form.Control required autoComplete="off"
              type = "text" name ="customer"
              placeholder="Enter Customer Name"
              value = {customer}
              onChange={this.orderChange}/>
          </Form.Group>   */}




            
          {/* <Form.Group as = {Col}>
            <Form.Label>Customer Name</Form.Label>
            <Form.Control required autoComplete="off"
            type = "text" name ="customerName"
            placeholder="Enter Customer Name"
            value = {customerName}
            onChange={this.orderChange}/>
          </Form.Group>   */}




  {/* <Form.Group as = {Col}>
    <Form.Label>Seed Name</Form.Label>
    <Form.Control required autoComplete="off"
     type = "text" name = "seedName"
    placeholder="Enter Seed Name"
    value = {seedName}
    onChange={this.orderChange}/>
  </Form.Group> */}
  {/* <Form.Group as = {Col}>
    <Form.Label>Tray Type</Form.Label>
    <Form.Control required autoComplete="off"
     type = "text" name = "trayType"
    placeholder="Enter Tray Type"
    value = {trayType}
    onChange={this.orderChange}/>
  </Form.Group> */}
  {/* <Form.Group as = {Col}>
    <Form.Label>Order Quantity</Form.Label>
    <Form.Control required autoComplete="off"
     type = "number" name = "qty"
    placeholder="Enter Order Quantity"
    value = {qty}
    onChange={this.orderChange}/>
  </Form.Group> */}
  
  <Form.Group as = {Col}>
    <Form.Label>Delivery Date</Form.Label>
    <Form.Control required autoComplete="off"
    type = "date" name = "deliveryDate"
    placeholder="YYYY-MM-DD"
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
