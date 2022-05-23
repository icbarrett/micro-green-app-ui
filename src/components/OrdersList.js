
import { Component } from 'react';
import {Table, Button, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

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
           <Link to = {"/orders/add"}><Button variant="dark" class="item" id="addOrdersBtn"><FontAwesomeIcon icon = {faPlusSquare}/>ADD ORDERS</Button></Link>
          <h2 className='"text-center'>List Orders</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Seed Name</th>
              <th>Tray Quantity</th>
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
                <td>{order.customer.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.deliveryDate}</td>
                {order.orderDetails.map((orderDetail) =>(
                  <><td>{orderDetail.seed.seedName}</td><td>{orderDetail.tray.qty}</td></>
                )
                )}

                 <td>
                  <ButtonGroup>
                  <button size = "sm" variant = "outline-primary"><FontAwesomeIcon icon = {faEdit}/></button>
                  <button size = "sm" variant = "outline-primary" style = {{marginLeft:"10px"}}> <FontAwesomeIcon icon = {faTrash}/></button>
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
