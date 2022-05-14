import React from 'react'

//import table component styling
import {Table, Button, Form} from 'react-bootstrap';

const Orders = () => {
  return (
    <div>
      <div class="orders">
        <h2 class="item">ORDERS</h2>
        <div class="item">
          <h4>SORT BY</h4>
          <Form.Select >
            <option>Order ID</option>
            <option>Order Date</option>
            <option>Delivery Date</option>
            <option>Status</option>
            <option>Order Details</option>
          </Form.Select>
        </div>
        <Button variant="dark" class="item" id="addOrdersBtn">ADD ORDER</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ORDER ID</th>
            <th>Order Date</th>
            <th>Delivery Date</th>
            <th>Status</th>
            <th>Order Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5/5/2022</td>
            <td>5/30/2022</td>
            <td>Active</td>
            <div><td><Button  variant="dark" class="item" id="addOrderDetails">Order Details</Button></td></div>
          </tr>
          <tr>
            <td>2</td>
            <td>5/1/2022</td>
            <td>5/15/2022</td>
            <td>Active</td>
            <div><td><Button  variant="dark" class="item" id="addOrderDetails">Order Details</Button></td></div>
          </tr>
          <tr>
            <td>3</td>
            <td>4/25/2022</td>
            <td>5/8/2022</td>
            <td>Closed</td>
            <div><td><Button  variant="dark" class="item" id="addOrderDetails">Order Details</Button></td></div>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Orders;