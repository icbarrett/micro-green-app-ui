import React, { useEffect, useState} from 'react'

//import table component styling
import {Table, Button, Form} from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import cellEditFactory from 'react-bootstrap-table2-editor';

const Inventory = () => {
  //api connect
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


  //table creation
  const columns = [{
    dataField: 'seedName',
    text: 'SEED NAME', 
    sort: true,
    editable: false
  }, {
    dataField: 'qty',
    text: 'WEIGHT(g)',
    sort: true
  }];

  const detailColumns = [{
    dataField: 'blackoutTime',
    text: 'Blackout Time'
  }, {
    dataField: 'harvestTime',
    text: 'Harvest Time'
  }, {
    dataField: 'seedPresoak',
    text: 'Presoak'
  }, {
    dataField: 'germinationTime',
    text: 'Germination Time'
  }, {
    dataField: 'lot',
    text: 'Lot'
  }];

  const expandRow = {
    renderer: row => (
      <BootstrapTable 
        keyField='id'
        data = { seeds }
        columns = { detailColumns }
      />
    )
  }

  return (
    <div>
      <div class="inventory">
        <h2 class="item">INVENTORY</h2>
        <Button variant="dark" class="item" id="addSeedsBtn">ADD SEEDS</Button>
      </div>

      <BootstrapTable 
        keyField='id'
        data = { seeds }
        columns = { columns }
        expandRow = { expandRow }
        cellEdit= { cellEditFactory({mode: 'dbclick' })}
      />


{/* commented out old table mapping  */}
      {/* <Table striped bordered hover>
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
          </tbody>
      </Table> */}
    </div>
  )
}

export default Inventory;