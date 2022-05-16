import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import ordersService from '../services/ordersService'

//import table component styling
import {Table, Button} from 'react-bootstrap';

const Orders = () => {

    const [orders, setOrders] = useState([])

    useEffect(() => {

        getAllOrders();
    }, [])

    const getAllOrders = () => {
        ordersService.getAllOrders().then((response) => {
            setOrders(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const deleteOrder = (orderId) => {
       ordersService.deleteOrder(orderId).then((response) =>{
        getAllOrders();

       }).catch(error =>{
           console.log(error);
       })
        
    }

  return (
    <div>
      <div className="orders">
        <h2 className="item">ORDERS</h2>
        {/* <div className="item">
          <h4>SORT BY</h4>
          <Form.Select >
            <option>Order ID</option>
            <option>Order Date</option>
            <option>Delivery Date</option>
            <option>Status</option>
          </Form.Select>
        </div> */}
        <Button variant="dark" className="item" id="addOrdersBtn">ADD ORDER</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {
            orders.map(
              orders =>
          <tr key = {orders.orderId}>
            <td>{orders.orderId}</td>
            <td>{orders.orderDate}</td>
            <td>{orders.deliveryDate}</td>
            <td>{orders.activeOrder.toString()}</td>
            <td>
                                    <Link className="btn btn-info" to={`/orders/update/${orders.orderId}`} >Update</Link>
                                    <button className = "btn btn-danger" onClick = {() => deleteOrder(orders.orderId)}
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
          </tr>
                )
              }
                  {/* </tbody>
          <tr>
            <td>62</td>
            <td>2</td>
            <td>5/1/2022</td>
            <td>5/15/2022</td>
            <td>Active</td>
            <div><td><Button  variant="dark" class="item" id="addOrderDetails">Order Details</Button></td></div>
          </tr>
          <tr>
            <td>63</td>
            <td>3</td>
            <td>4/25/2022</td>
            <td>5/8/2022</td>
            <td>Closed</td>
            <div><td><Button  variant="dark" class="item" id="addOrderDetails">Order Details</Button></td></div>
          </tr>
          )
          } */}
        </tbody>
      </Table>
    </div>
  )
}

export default Orders;