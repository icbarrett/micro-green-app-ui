import { Component } from 'react';
import {Table, Button, ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faEdit, faTrash, faPlusSquare, faInfo } from '@fortawesome/free-solid-svg-icons';

export default class OrderDetails extends Component{

  constructor(props){
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount(){
    this.getOrderDetailsById();
    };
  
getOrderDetailsById = (orderId) => {
axios.get(`http://localhost:8080/orders/${orderId}`)
.then(response => response.data)
.then((data) => {
  this.setState({order:data});
  console.log(data);
});
}

 render(){
      return (
        <div className = "container">
          <h2 className='"text-center'>Order Details</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Active Status</th>
              <th>Order Quantity</th>
              <th>Seed Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.length === 0 ? 
            <tr align = "center">
              <td colSpan="6"> Orders</td>
            </tr>:
            this.state.orders.map((order) => (
              <tr key ={order.orderId}>
                <td>{order.orderId}</td>
                <td>{order.customer.customerName}</td>
                <td>{order.orderDate}</td>
                <td>{order.deliveryDate}</td>
                <td>{order.activeStatus.toString()}</td>
                {order.orderDetails.map((orderDetail) =>(
                  <>
                  <td>{orderDetail.qty}</td>
                  <td>{orderDetail.seed.seedName}</td>
                  
                  </>
                )
                )}

                 <td>
                  {/* <ButtonGroup>
                    <Link to = {`update/${order.orderId}`} className ="btn btn-sm btn-outline-primary"><FontAwesomeIcon icon = {faEdit}/></Link>
                    <button size = "sm" variant = "outline-primary" onClick= {this.deleteOrder.bind(this, order.orderId)} style = {{marginLeft:"10px"}}> <FontAwesomeIcon icon = {faTrash}/></button>
                    <Link to = {`/${order.orderId}`} className ="btn btn-sm btn-outline-primary" style = {{marginLeft:"10px"}}><FontAwesomeIcon icon = {faInfo}/></Link>
                  </ButtonGroup> */}
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