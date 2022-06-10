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

  updateQuantity(seedId) {
    let quantity = window.prompt("Please enter a seed quanitity", 0);
    if (quantity == null || quantity == "") {
      alert("you have not changed the quantity");
    } else {
      let quantityNum = Number(quantity);
      axios.post(`http://localhost:8080/update/${seedId}`, {qty: quantityNum}).then(response => response.data)
      .then((data) => {
        this.setState({inventory:data});
      });  
    }
  }

  deleteSeed(seedId) {
    let txt = ""
    if(window.confirm("Are you sure you would like to delete the seed?")) {
      axios.post(`http://localhost:8080/delete/${seedId}`).then(response => response.data)
      .then((data) => {
        this.setState({inventory:data});
      })
      txt = "You have deleted the seed";
    } else {
      txt = "You have not deleted the seed";
    }
    alert(txt);
  }


    render(){
      return (
        <div className = "container">
           <Link to = {"/inventory/add"}><Button variant="dark" class="item" id="addInventoryBtn"><FontAwesomeIcon icon = {faPlusSquare}/>ADD INVENTORY</Button></Link>
          <h2 className='"text-center'>Inventory</h2>
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
                  <button size = "sm" variant = "outline-primary" onClick={() => { this.updateQuantity(seed.id)}}><FontAwesomeIcon icon = {faEdit}/></button>
                  <button size = "sm" variant = "outline-primary" style = {{marginLeft:"10px"}} onClick={() => { this.deleteSeed(seed.id)}}> <FontAwesomeIcon icon = {faTrash}/></button>
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