import React from 'react'

//import table component styling
import {Table, Button, Form} from 'react-bootstrap';

const Inventory = () => {
  return (
    <div>
      <div class="inventory">
        <h2 class="item">INVENTORY</h2>
        <div class="item">
          <h4>SORT BY</h4>
          <Form.Select >
            <option>Lot No.</option>
            <option>Seed Name</option>
            <option>Weight</option>
            <option>Status</option>
          </Form.Select>
        </div>
        <Button variant="dark" class="item" id="addSeedsBtn">ADD SEEDS</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>LOT NO.</th>
            <th>SEED NAME</th>
            <th>COUNT</th>
            <th>WEIGHT(g)</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Dandelion</td>
            <td>200</td>
            <td>3</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Amaranth</td>
            <td>300</td>
            <td>5</td>
            <td>Available</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Basil Genovese</td>
            <td>400</td>
            <td>1.5</td>
            <td>Planted</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Inventory;