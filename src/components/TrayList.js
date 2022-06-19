import { Component } from 'react';
import {Table, Button, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faEdit, faInfo, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class TrayList extends Component{

    constructor(props){
        super(props);
        this.state = {
            tray: []
        };
    }

    componentDidMount(){
        this.getAllTrays();
    };
    

    getAllTrays(){
        axios.get("http://localhost:8080/trays")
        .then(response => response.data)
        .then((data) => {
            this.setState({tray:data});
            console.log(data)
       });
}


updateCustomer(trayId, tray) {

  let oldTrayType = tray.trayType
  let newTrayType = window.prompt("Please input tray change", oldTrayType);
    axios.put(`http://localhost:8080/tray/update/${trayId}`, {trayType: newTrayType}).then(response => response.data)
    .then(response =>  {
      console.log(response.data)
        this.setState({
        trayType: response.data
      });
    });  
    window.location.reload();
  }



deleteTray(trayId) {
  let txt = ""
  if(window.confirm("Are you sure you would like to delete this?")) {
    // axios.delete(`http://localhost:8080/tray/delete/${trayId}`).then(response => response.data)
    // .then((data) => {
    //   this.setState({tray:data});
    // })
    axios.put(`http://localhost:8080/tray/delete/${trayId}`)
    txt = "You have deleted this tray";
    window.location.reload();
  } else {
    txt = "You have not deleted tray";
    window.location.reload();

  }
 
  alert(txt);
  
}


    render(){
        return (
        <div className = "container">
          <h2 className='text-center'>Tray</h2>
            <Link to = {"/tray/add"}><Button variant="dark" class="item" id="addTrayBtn"><FontAwesomeIcon icon = {faPlusSquare}/>ADD TRAY</Button></Link>
            
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Tray Id</th>
              <th>Tray Type</th>
              <th>Size</th>
              <th>Qty</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tray.length === 0 ? 
            <tr align = "center">
              <td colSpan="6"> Trays</td>
            </tr>:
            this.state.tray.map((tray) => (
              <tr key ={tray.id}>
                <td>{tray.trayId}</td>
                <td>{tray.trayType}</td>
                <td>{tray.size}</td>
                <td>{tray.qty}</td>


                <td>
                  <ButtonGroup>
                      <button size = "sm" variant = "outline-primary" onClick={() => { this.updateCustomer(tray.trayId, tray)}}><FontAwesomeIcon icon = {faEdit}/></button>

                      <button size = "sm" variant = "outline-primary" style = {{marginLeft:"10px"}} onClick={() => { this.deleteTray(tray.trayId)}}> <FontAwesomeIcon icon = {faTrash}/></button>
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
