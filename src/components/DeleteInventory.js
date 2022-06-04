import { Component } from "react";
import {Card, Form, Button, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faSave } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

export default class DeleteInventory extends Component{

  constructor(props){
    super(props);
    //state object stores property values that belong to the component
    this.state = this.initialState;
    this.inventoryChange = this.inventoryChange.bind(this);
    this.submitInventory = this.submitInventory.bind(this);
  }

  initialState = {
    seedName: '',  qty:''
  }

  resetInventory = ()=>{
    this.setState(()=>this.initialState);
  }

  submitInventory = event => {
    // alert('Seed Name: '+this.state.seedName+', Quantity: '+this.state.qty'');
    event.preventDefault();

    const inventory = {
      qty: this.state.qty
    };

    axios.post("http://localhost:8080/inventory/delete/{seedId}", inventory)
    .then(response => {
      if(response.data != null){
        this.setState(this.initialState);
        alert("Seed deleted successfully");
      }
    });
  }


  inventoryChange = event => {
    this.setState({
      [event.target.name]:event.target.value
    });
  }
  //add new seed form
  render(){
    const {seedName, qty} = this.state;

    return (
      <Card className="border border-dark ">
        <Card.Header>Add New Inventory</Card.Header>
        <Form onReset ={this.resetInventory} onSubmit={this.submitInventory} id = "inventoryFormId">
          <Card.Body>
    <Form.Group as = {Col}>
    <Form.Label>Seed Name</Form.Label>
    <Form.Control required autoComplete="off"
    type = "text" name ="seedName"
    placeholder="Enter Seed Name"
    value = {seedName}
    onChange={this.inventoryChange}/>
  </Form.Group>  
  <Form.Group as = {Col}>
    <Form.Label>Quantity</Form.Label>
    <Form.Control required autoComplete="off"
     type = "text" name = "qty"
    placeholder="Enter Quantity"
    value = {qty}
    onChange={this.inventoryChange}/>
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