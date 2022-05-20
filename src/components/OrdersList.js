
import { Component } from 'react';
import {Table, Button, Form, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class OrdersList extends Component{

  constructor(props){
    super(props);
    this.state = {
      orders: []
    };
  }
  componentDidMount(){
    this.getAllOrders();
    };
  

  getAllOrders(){
    axios.get("http://localhost:8080/orders")
    .then(response => response.data)
    .then((data) => {
      this.setState({orders:data});
  });
}


    render(){
      return (
        <div className = "container">
           <Link to = {"/orders/add"}><Button variant="dark" class="item" id="addOrdersBtn">ADD ORDERS</Button></Link>
          <h2 className='"text-center'>List Orders</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Active Order</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.orders.length === 0 ?
            <tr align = "center">
              <td colSpan="6"> Orders</td>
            </tr> :
            this.state.orders.map((order) => (
              <tr key ="order.id">
                <td>{order.orderId}</td>
                <td>{order.orderDate}</td>
                <td>{order.deliveryDate}</td>
                <td>{order.activeOrder.toString()}</td>
                <td>
                  <ButtonGroup>
                  <button className="btn btn-info">Update</button>
                  <button className = "btn btn-danger" style = {{marginLeft:"10px"}}> Delete</button>
                  <button className="btn btn-info" style = {{marginLeft:"10px"}}>Order Details</button>
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
