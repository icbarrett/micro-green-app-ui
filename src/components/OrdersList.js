import { Component } from 'react';
import {Table, Button, ButtonGroup} from 'react-bootstrap';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

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

deleteOrder = (orderId) => {
  axios.delete(`http://localhost:8080/orders/delete/${orderId}`)
  .then(response=>{
    if(response.data != null){
      alert("Order deleted successfully.");
      this.setState({
        orders: this.state.orders.filter(order=>order.orderId !== orderId)
      })
    }
  });
  // alert(orderId);
};


    render(){
      return (
        <div className = "container">
          <Button variant="dark" class="item" id="addOrdersBtn" onClick={()=>window.open("/orders/create", '_blank')}><FontAwesomeIcon icon = {faPlusSquare}/>ADD ORDERS</Button>
          <h2 className='text-center'>List Orders</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer Name</th>
              <th>Order Date</th>
              <th>Delivery Date</th>
              <th>Order Quantity</th>
              <th>Seed Name</th>
              <th>Actions</th>
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
                {order.orderDetails.map((orderDetail) =>(
                  <>
                  <td>{orderDetail.qty}</td>
                  <td>{orderDetail.seed.seedName}</td>
                  
                  </>
                )
                )}

                 <td>
                  <ButtonGroup>
                  <button size = "sm" variant = "outline-primary"><FontAwesomeIcon icon = {faEdit}/></button>
                  <button size = "sm" variant = "outline-primary" onClick= {this.deleteOrder.bind(this, order.orderId)} style = {{marginLeft:"10px"}}> <FontAwesomeIcon icon = {faTrash}/></button>
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