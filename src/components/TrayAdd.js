import { Component } from "react";
import {Card, Form, Button, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faSave } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom"; 

import axios from "axios";

export default class Tray extends Component{

    constructor(props){
        super(props);
        //state object stores property values that belong to the component
        this.state = this.initialState;
        this.trayChange = this.trayChange.bind(this);
        this.submitTray = this.submitTray.bind(this);
    }

    initialState = {
        trayType: '',
        size: ''
    }

    resetTray = ()=>{
        this.setState(()=>this.initialState);
    }

    submitTray = event => {
        // alert('Customer Name: '+this.state.customerName+', Order Date: '+this.state.orderDate+', Delivery Date: '+this.state.deliveryDate+', Active Order: '+this.state.activeOrder+'');
        event.preventDefault();

        const tray = {
            trayType: this.state.trayType,
            size: this.state.size
        };

        axios.post("http://localhost:8080/trays/add", tray)
        .then(response => {
        if(response.data != null){
            this.setState(this.initialState);
            alert("Tray saved successfully");
        }
        });
    }

    trayChange = event => {
        this.setState({
        [event.target.name]:event.target.value
        });
    }

    
  //add new tray form
    render(){
        const {trayType, size} = this.state;

        return (
            <Card className="border border-dark formcard">
                <Card.Header>Add A New Tray</Card.Header>
                <Form onReset ={this.resetTray} onSubmit={this.submitTray} id = "trayFormId">
                    <Card.Body>
                        <Form.Group as = {Col}>
                            <Form.Label>Tray Type</Form.Label>
                                <Form.Control required autoComplete="off"
                                type = "text" name ="trayType"
                                placeholder="Enter Tray Type"
                                value = {trayType}
                                onChange={this.trayChange}/>
                        </Form.Group>  
                    </Card.Body>
                    <Card.Body>
                        <Form.Group as = {Col}>
                            <Form.Label>Tray Size</Form.Label>
                                <Form.Control required autoComplete="off"
                                type = "text" name ="size"
                                placeholder="Enter Tray Size"
                                value = {size}
                                onChange={this.trayChange}/>
                        </Form.Group>  
                    </Card.Body>

                    <Card.Footer>
                        <Button  variant = "success" type="submit">
                            <FontAwesomeIcon icon = {faSave}/>
                            Submit
                        </Button>{' '}
                        <Button  variant = "info" type="reset">
                            <FontAwesomeIcon icon = {faUndo}/>
                            Reset
                        </Button>
                    </Card.Footer>
                </Form>
            </Card>
        ) 
    }
}


// import { Component } from "react";
// import {Card, Form, Button, Col} from 'react-bootstrap'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faUndo, faSave } from "@fortawesome/free-solid-svg-icons";
// import { useHistory } from "react-router-dom"; 

// import axios from "axios";

// export default class Customer extends Component{

//     constructor(props){
//         super(props);
//         //state object stores property values that belong to the component
//         this.state = this.initialState;
//         this.customerChange = this.customerChange.bind(this);
//         this.submitCustomer = this.submitCustomer.bind(this);
//     }

//     initialState = {
//         customerName: ''
//     }

//     resetCustomer = ()=>{
//         this.setState(()=>this.initialState);
//     }

//     submitCustomer = event => {
//         // alert('Customer Name: '+this.state.customerName+', Order Date: '+this.state.orderDate+', Delivery Date: '+this.state.deliveryDate+', Active Order: '+this.state.activeOrder+'');
//         event.preventDefault();

//         const customer = {
//         customerName: this.state.customerName
//         };

//         axios.post("http://localhost:8080/customers/add", customer)
//         .then(response => {
//         if(response.data != null){
//             this.setState(this.initialState);
//             alert("Customer saved successfully");
//         }
//         });
//     }

//     customerChange = event => {
//         this.setState({
//         [event.target.name]:event.target.value
//         });
//     }

    
//   //add new customer form
//     render(){
//         const {customerName} = this.state;

//         return (
//             <Card className="border border-dark formcard">
//                 <Card.Header>Add New Customer</Card.Header>
//                 <Form onReset ={this.resetCustomer} onSubmit={this.submitCustomer} id = "customerFormId">
//                     <Card.Body>
//                         <Form.Group as = {Col}>
//                             <Form.Label>Customer Name</Form.Label>
//                                 <Form.Control required autoComplete="off"
//                                 type = "text" name ="customerName"
//                                 placeholder="Enter Customer Name"
//                                 value = {customerName}
//                                 onChange={this.customerChange}/>
//                         </Form.Group>  
//                     </Card.Body>
//                     <Card.Footer>
//                         <Button  variant = "success" type="submit">
//                             <FontAwesomeIcon icon = {faSave}/>
//                             Submit
//                         </Button>{' '}
//                         <Button  variant = "info" type="reset">
//                             <FontAwesomeIcon icon = {faUndo}/>
//                             Reset
//                         </Button>
//                     </Card.Footer>
//                 </Form>
//             </Card>
//         ) 
//     }
// }
