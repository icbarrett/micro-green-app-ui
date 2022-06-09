// import React, {state, Component } from "react";
// import { useNavigate, useParams} from 'react-router-dom';
// import CustomerService from "../../services/CustomerService";
// import axios from "axios";
// import { useState, useEffect } from "react";


// const AddCustomer = () => {
//     const [customerName, setCustomerName] = useState('')
//     const navigate = useNavigate();
//     const {customerId} = useParams();

//     const saveOrUpdateCustomer = (e) => {
//         e.preventDefault();

//         const customer = {customerName}

//         if(customerId){
//            CustomerService.updateCustomer(customerId,customer).then((response)=>{
//                console.log(response.data)
//                navigate('/customers')
//            }).catch(error =>{
//                console.log(error)
//            }) 
//         }else{
//             CustomerService.createCustomer(customer).then((response)=>{
//                 console.log(response.data)
//                navigate('/orders');
//             }).catch(error => {
//                 console.log(error)
//             })
//         }
//     }

//     useEffect(() => {
//         CustomerService.getCustomerById(customerId).then((response)=>{
//             setCustomerName(response.data.customerName)
//         }).catch(error => {
//             console.log(error)
//         })
//     }, [])

//     const title = () => {
//         if(customerId){
//             return <h2>Update Customer</h2>
//         }else{
//             return <h2>Add Customer</h2>
//         }
//     }
//     return(
//         <div>
//             <br></br>
//             <div className="container">
//                 <div className="row">
//                     <div className="card col-md-6 offset-md-3 offset-md-3">
//                         {
//                             title()
//                         }
//                         <div className ="card-body">
//                             <form>
//                                 <div className="form-group mb-2">
//                                     <label className="form-label">Customer Name</label>
//                                     <input
//                                     type = "text"
//                                     placeholder="Enter Customer Name"
//                                     name = "customerName"
//                                     className="form-control"
//                                     value = {customerName}
//                                     onChange = {(e) => setCustomerName(e.target.value)}
//                                     ></input>
//                                 </div>
//                                 <button className="btn-btn-success" onClick={(e) => saveOrUpdateCustomer(e)}>Submit</button>
//                             </form>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

  
// export default AddCustomer;
import { Component } from "react";
import {Card, Form, Button, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faSave } from "@fortawesome/free-solid-svg-icons";

import axios from "axios";

export default class Customer extends Component{

    constructor(props){
        super(props);
        //state object stores property values that belong to the component
        this.state = this.initialState;
        this.customerChange = this.customerChange.bind(this);
        this.submitCustomer = this.submitCustomer.bind(this);
    }

    initialState = {
        customerName: ''
    }

    resetCustomer = ()=>{
        this.setState(()=>this.initialState);
    }

    submitCustomer = event => {
        // alert('Customer Name: '+this.state.customerName+', Order Date: '+this.state.orderDate+', Delivery Date: '+this.state.deliveryDate+', Active Order: '+this.state.activeOrder+'');
        event.preventDefault();

        const customer = {
        customerName: this.state.customerName
        };

        axios.post("http://localhost:8080/customers/add", customer)
        .then(response => {
        if(response.data != null){
            this.setState(this.initialState);
            alert("Customer saved successfully");
        }
        });
    }

    customerChange = event => {
        this.setState({
        [event.target.name]:event.target.value
        });
    }
  //add new customer form
    render(){
        const {customerName} = this.state;

        return (
            <Card className="border border-dark ">
                <Card.Header>Add New Customer</Card.Header>
                <Form onReset ={this.resetCustomer} onSubmit={this.submitCustomer} id = "customerFormId">
                    <Card.Body>
                        <Form.Group as = {Col}>
                            <Form.Label>Customer Name</Form.Label>
                                <Form.Control required autoComplete="off"
                                type = "text" name ="customerName"
                                placeholder="Enter Customer Name"
                                value = {customerName}
                                onChange={this.customerChange}/>
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