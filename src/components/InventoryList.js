import { Component } from 'react';
import {Table, Button, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class InventoryList extends Component{

  constructor(props){
    super(props);
    this.state = {
      inventory: []
    };
  }

  componentDidMount(){
    this.getAllInventory();
    };
  

  getAllInventory(){
    axios.get("http://localhost:8080/inventory")
    .then(response => response.data)
    .then((data) => {
      this.setState({inventory:data});
  });
}


    render(){
      return (
        <div className = "container">
           <Link to = {"/inventory/add"}><Button variant="dark" class="item" id="addInventoryBtn"><FontAwesomeIcon icon = {faPlusSquare}/>ADD INVENTORY</Button></Link>
          <h2 className='"text-center'>List Inventory</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Seed Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {this.state.inventory.length === 0 ? 
            <tr align = "center">
              <td colSpan="6"> Inventory</td>
            </tr>:
            this.state.inventory.map((seed) => (
              <tr key ={seed.id}>
                <td>{seed.seedName}</td>
                <td>{seed.qty}</td>

                 <td>
                  <ButtonGroup>
                  <Link to = {"/inventory/update/{seedId}"}><button size = "sm" variant = "outline-primary"><FontAwesomeIcon icon = {faEdit}/></button></Link>
                  <Link to = {"/inventory/delete/{seedId}"}><button size = "sm" variant = "outline-primary" style = {{marginLeft:"10px"}}> <FontAwesomeIcon icon = {faTrash}/></button></Link>
                  </ButtonGroup>
                </td>
              </tr>
            ))
          }
          </tbody>
             </Table>   
               </div>
                  )
                    }
  }