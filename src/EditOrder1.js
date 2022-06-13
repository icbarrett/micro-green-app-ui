// import React from "react";
// import axios from "axios";
// import {Card, Form, Button, Col} from 'react-bootstrap'

// class EditOrder1 extends React.Component {
//   constructor(props) {
//     super(props);
//     const { id, customerName, qty } = props.location.state.contact;
//     this.state = {
//       id,
//       customer:{
//         customerName
//       },
//       orderDetails:[
//         {
//             qty
//         }
//       ]
//     };
//   }

//   updateOrderHandler = async (order) => {
//     const response = await axios.put(`/orders/update/${order.id}`, order);
//     const { id, customerName,qty } = response.data;
//     setContacts(
//       orders.map((order) => {
//         return order.id === id ? { ...response.data } : order;
//       })
//     );
//   };

//   update = (e) => {
//     e.preventDefault();
//     if (this.state.customerName === "" || this.state.qty === "") {
//       alert("ALl the fields are mandatory!");
//       return;
//     }
//     this.props.updateOrderHandler(this.state);
//     this.setState({ 
//         customer:{
//             customerName:"",
//           },
//           orderDetails:[
//             {
//                 qty:""
//             }
//           ]
//     });
//     this.props.history.push("/orders");
//   };
//   render(){
//   return (
//     <Card className="border border-dark ">
//       <Card.Header>Update Order</Card.Header>
//       <Form  id = "orderFormId" onSubmit = {this.update}>
//         <Card.Body>
//   <Form.Group as = {Col}>
//   <Form.Label>Customer Name</Form.Label>
//   <Form.Control required autoComplete="off"
//   type = "text" name ="customerName"
//   placeholder="Enter Customer Name"
//   value = {this.state.customerName}
//   onChange={(e) => this.setState({ name: e.target.value })}
//   />
// </Form.Group>  
// <Form.Group as = {Col}>
//   <Form.Label>Order Quantity</Form.Label>
//   <Form.Control required autoComplete="off"
//   type = "number" name ="qty"
//   placeholder="Enter Order Quantity"
//   value = {this.state.qty}
//   onChange={(e) => this.setState({ name: e.target.value })}
//   />
// </Form.Group>  
// </Card.Body>
// <Card.Footer>
// <Button  variant = "success" type="submit" onClick = {putData}>
// Save
// </Button>{' '}
// <Button  variant = "info" type="reset">
// Reset
// </Button>
// </Card.Footer>
// </Form>
// </Card>
// ) 
// }
// }

// export default EditOrder1;