import { Component } from 'react';
import {Table, Button, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class CustomerList extends Component{

    constructor(props){
        super(props);
        this.state = {
            customer: []
        };
    }

    componentDidMount(){
        this.getAllCustomers();
    };
    

    getAllCustomers(){
        axios.get("http://localhost:8080/customers")
        .then(response => response.data)
        .then((data) => {
            this.setState({customer:data});
            console.log(data)
       });
}


updateCustomer(customerId, customer) {

  let oldCustomerName = customer.customerName;
  let newName = window.prompt("Please input customer change", oldCustomerName);
    axios.put(`http://localhost:8080/customers/update/${customerId}`, {customerName: newName}).then(response => response.data)
    .then(response =>  {
      console.log(response.data)
        this.setState({
        customerName: response.data
      });
    });  
    window.location.reload();
  }



deleteCustomer(customerId) {
  let txt = ""
  if(window.confirm("Are you sure you would like to delete this?")) {
    // axios.delete(`http://localhost:8080/customer/delete/${customerId}`).then(response => response.data)
    // .then((data) => {
    //   this.setState({customer:data});
    // })
    axios.put(`http://localhost:8080/customers/delete/${customerId}`)
    txt = "You have deleted this customer";
    window.location.reload();
  } else {
    txt = "You have not deleted customer";
    window.location.reload();

  }
 
  alert(txt);
  
}


    render(){
        return (
        <div className = "container">
          <h2 className='text-center'>Customers</h2>
            <Link to = {"/customers/add"}><Button variant="dark" class="item" id="addCustomerBtn"><FontAwesomeIcon icon = {faPlusSquare}/>ADD CUSTOMER</Button></Link>
            
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Active</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customer.length === 0 ? 
            <tr align = "center">
              <td colSpan="6"> Customers</td>
            </tr>:
            this.state.customer.map((customer) => (
              <tr key ={customer.id}>
                <td>{customer.customerId}</td>
                <td>{customer.customerName}</td>
                <td>{customer.activeCustomer.toString()}</td>

                <td>
                  <ButtonGroup>
                      <button size = "sm" variant = "outline-primary" onClick={() => { this.updateCustomer(customer.customerId, customer)}}><FontAwesomeIcon icon = {faEdit}/></button>

                      <button size = "sm" variant = "outline-primary" style = {{marginLeft:"10px"}} onClick={() => { this.deleteCustomer(customer.customerId)}}> <FontAwesomeIcon icon = {faTrash}/></button>
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
