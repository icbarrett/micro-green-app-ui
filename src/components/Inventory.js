import React, { useEffect, useState} from 'react'

//import table component styling
import {Table, Button, Form} from 'react-bootstrap';


const Inventory = () => {
  const [seeds, setSeeds] = useState([])

  useEffect(() => {
    // runs 1 time because it's in a `useEffect`
    fetchSeeds();
  }, []);

  const fetchSeeds = () => {
    fetch('http://localhost:3000/inventory/view')
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        setSeeds(text);
      })
      .catch((error) => {
        console.log(error);
      });
  };


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
        {seeds.map((seed) => (
          <tbody>
          <tr key={seed.id}>
            <td>{seed.seedName}</td>
            <td>{seed.qty}</td>
          </tr>
          </tbody>
        ))
        }
      </Table>
    </div>
  )
}

export default Inventory;