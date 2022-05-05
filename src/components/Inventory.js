import React from 'react'

//import table component styling
import Table from 'react-bootstrap/Table'

const Inventory = () => {
  return (
    <div>
      <h1>Inventory</h1>
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
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default Inventory;