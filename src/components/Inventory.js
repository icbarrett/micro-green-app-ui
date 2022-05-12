import React, { useEffect, useState} from 'react'

//import table component styling
import {Table, Button, Form} from 'react-bootstrap';


const Inventory = () => {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <div class="inventory">
        <h2 class="item">INVENTORY</h2>
        <div class="item">
          <h4>SORT BY</h4>
          <Form.Select >
            <option>Seed Name</option>
            <option>Weight</option>
          </Form.Select>
        </div>
        <Button variant="dark" class="item" id="addSeedsBtn">ADD SEEDS</Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SEED NAME</th>
            <th>WEIGHT(g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dandelion</td>
            <td>200</td>
          </tr>
          <tr>
            <td>Amaranth</td>
            <td>300</td>
          </tr>
          <tr>
            <td>Basil Genovese</td>
            <td>400</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Inventory;