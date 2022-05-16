import React, { useEffect, useState} from 'react'

//import table component styling
import {Table, Button, Form} from 'react-bootstrap';


const Inventory = () => {
  const [seeds, setSeeds] = useState([]);

  const displaySeeds = seeds.filter((val) => {

  })
  useEffect(() => {
    // runs 1 time because it's in a `useEffect`
    fetchSeeds();
  }, []);

  const fetchSeeds = () => {
    fetch('http://localhost:8080/inventory')
      .then((response) => {
        // return response.text();
        return response.json();
      })
      .then((json) => {
        setSeeds(json);
        // setSeeds(text);
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
          <tbody>
          {seeds.map((item, i) => (
                    <tr key={i}>
                        <td>{item.seedName}</td>
                        <td>{item.qty}</td>
                    </tr>
          ))}
          {/* <tr>
            <td>{seeds.seed_name}</td>
            <td>{seeds.qty}</td>
          </tr> */}
          </tbody>
      </Table>
    </div>
  )
}

export default Inventory;