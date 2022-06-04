import { Component } from "react";
import {Card, Form, Button, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faSave } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

export default class Inventory extends Component{

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
      seedName: this.state.seedName,
      qty: this.state.qty
    };

    axios.post("http://localhost:8080/inventory/add", inventory)
    .then(response => {
      if(response.data != null){
        this.setState(this.initialState);
        alert("Seed saved successfully");
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






// import React, { useEffect, useState} from 'react'

// //import table component styling
// import {Table, Button, Form} from 'react-bootstrap';
// import BootstrapTable from 'react-bootstrap-table-next';
// import cellEditFactory from 'react-bootstrap-table2-editor';

// const Inventory = () => {
//   //api connect
//   const [seeds, setSeeds] = useState([]);

//   const displaySeeds = seeds.filter((val) => {

//   })
//   useEffect(() => {
//     // runs 1 time because it's in a `useEffect`
//     fetchSeeds();
//   }, []);

//   const fetchSeeds = () => {
//     fetch('http://localhost:8080/inventory')
//       .then((response) => {
//         // return response.text();
//         return response.json();
//       })
//       .then((json) => {
//         setSeeds(json);
//         // setSeeds(text);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };


//   //table creation
//   const columns = [{
//     dataField: 'seedName',
//     text: 'SEED NAME', 
//     sort: true,
//     editable: false
//   }, {
//     dataField: 'qty',
//     text: 'WEIGHT(g)',
//     sort: true
//   }];

//   const detailColumns = [{
//     dataField: 'blackoutTime',
//     text: 'Blackout Time'
//   }, {
//     dataField: 'harvestTime',
//     text: 'Harvest Time'
//   }, {
//     dataField: 'seedPresoak',
//     text: 'Presoak'
//   }, {
//     dataField: 'germinationTime',
//     text: 'Germination Time'
//   }, {
//     dataField: 'lot',
//     text: 'Lot'
//   }];

//   const expandRow = {
//     renderer: row => (
//       <BootstrapTable 
//         keyField='id'
//         data = { seeds }
//         columns = { detailColumns }
//       />
//     )
//   }

//   return (
//     <div>
//       <div class="inventory">
//         <h2 class="item">INVENTORY</h2>
//         <Button variant="dark" class="item" id="addSeedsBtn">ADD SEEDS</Button>
//       </div>

//       <BootstrapTable 
//         keyField='id'
//         data = { seeds }
//         columns = { columns }
//         expandRow = { expandRow }
//         cellEdit= { cellEditFactory({mode: 'dbclick' })}
//       />


// {/* commented out old table mapping  */}
//       {/* <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>SEED NAME</th>
//             <th>WEIGHT(g)</th>
//           </tr>
//         </thead>
//           <tbody>
//           {seeds.map((item, i) => (
//                     <tr key={i}>
//                         <td>{item.seedName}</td>
//                         <td>{item.qty}</td>
//                     </tr>
//           ))}
//           </tbody>
//       </Table> */}
//     </div>
//   )
// }

// export default Inventory;