// // import React, { useRef, useState } from "react";
// // import axios from "axios";
// // import {Card, Form, Button, Col} from 'react-bootstrap'

// // function EditOrder() {
// //   const put_orderId = useRef(null);
// //   const put_customerName = useRef(null);
// //   const put_orderDate = useRef(null);
// //   const put_DeliveryDate = useRef(null);
// //   const [putResult, setPutResult] = useState(null);
// //   const fortmatResponse = (res) => {
// //     return JSON.stringify(res, null, 2);
// //   };
// //   async function putData() {
// //     const id = put_orderId.current.value;
// //     if (id) {
// //       const putData = {
// //         customerName: put_customerName.current.value,
// //         orderDate: put_orderDate.current.value,
// //         deliveryDate: put_DeliveryDate.current.value,
// //       };
// //       try {
// //         const res = await axios.put(`http://localhost:8080/orders/${id}`, putData, {
// //           headers: {
// //             "x-access-token": "token-value",
// //           },
// //         });
// //         const result = {
// //           status: res.status + "-" + res.statusText,
// //           headers: res.headers,
// //           data: res.data,
// //         };
// //         setPutResult(fortmatResponse(result));
// //       } catch (err) {
// //         setPutResult(fortmatResponse(err.response?.data || err));
// //       }
// //     }
// //   }
// //   const clearPutOutput = () => {
// //     setPutResult(null);
// //   };
// //   return (
// //           <Card className="border border-dark ">
// //             <Card.Header>Update Order</Card.Header>
// //             <Form  id = "orderFormId">
// //               <Card.Body>
// //         <Form.Group as = {Col}>
// //         <Form.Label>Customer Name</Form.Label>
// //         <Form.Control required autoComplete="off"
// //         type = "text" name ="customerName"
// //         placeholder="Enter Customer Name"
// //         ref = {put_customerName}
// //         // onChange={this.orderChange}
// //         />
// //       </Form.Group>  
// //       <Form.Group as = {Col}>
// //         <Form.Label>Order Date</Form.Label>
// //         <Form.Control required autoComplete="off"
// //         type = "date" name ="orderDate"
// //         placeholder="Enter Order Date"
// //         ref = {put_orderDate}
// //         // onChange={this.orderChange}
// //         />
// //       </Form.Group>  
// //       </Card.Body>
// //  <Card.Footer>
// //    <Button  variant = "success" type="submit" onClick = {putData}>
// //    Save
// //    </Button>{' '}
// //    <Button  variant = "info" type="reset">
// //      Reset
// //    </Button>
// //   </Card.Footer>
// //    </Form>
// //    </Card>
// //     ) 
// // }
 

// // export default EditOrder;
// import React from 'react';
// import { Form } from 'react-bootstrap';
// import axios from 'axios';
 
 
// class EditOrder extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         orderDate: '',
//         deliveryDate: '',
//         // orderDetails: [ 
//         //   {
//         //   qty: "",
//         // seed: {
//         //   seedName: ""
//         // },
//         // tray:{
//         //   trayType:""
//         // }
//         //   }
//         // ],
//         // customer:{
//         //   customerName:''
//         // }
//     };
 
//     this.handleUpdateOrderSubmit = this.handleOrderSubmit.bind(this);
     
//   }
 
 
 
//   handleUpdateOrderSubmit = (event) => {
 
//     event.preventDefault(); // to prevent refreshing the page every time we submit. 
 
     
//       axios.put(`http://localhost:8080/orders/update/${this.props.order.id}`, { order: this.state })
//         .then(res => {
//           console.log(res.status);
//         });
   
//         render() {
//             return (
//               <div className="container py-5 bg-grey">
//                 <Form className="form-update" onSubmit={this.handleUpdateEmployeeSubmit} >
//                 <Form.Group as = {Col}>
//    <Form.Label>Order Date</Form.Label>
//    <Form.Control required autoComplete="off"
//     type = "date" name = "orderDate"
//     placeholder="YYYY-MM-DD"
//     value = {orderDate}
//     // onChange={this.orderChange}
//     />
//   </Form.Group>
//   <Form.Group as = {Col}>
//     <Form.Label>Delivery Date</Form.Label>
//     <Form.Control required autoComplete="off"
//     type = "date" name = "deliveryDate"
//     placeholder="YYYY-MM-DD"
//     value = {deliveryDate}
//     // onChange={this.orderChange}
//     />
//   </Form.Group>
//                 </Form>
 
//  </div>
// );

//   }
//   }
// }|

// export default EditOrder;  
 