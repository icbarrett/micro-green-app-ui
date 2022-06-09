import axios from 'axios'
import React from 'react'

//working dropdown
export const CustomerDropdown = (props) => (
  <div className="form-group">
    <strong>{props.customerName}</strong>
    <select
      className="form-control"
      name="{props.customerName}"
      onChange={props.onChange}
    >
      <option defaultValue>Select customer name {props.name}</option>
      {props.options.map((item, index) => (
        <option key={index} value={item.customerId}>
          {item.customerName}
        </option>
      ))}
    </select>
  </div>
)
export default class CustomerListDropDown extends React.Component {
  constructor() {
    super()
    this.state = {
      collection: [],
      value: '',
    }
  }
  componentDidMount() {
    fetch('http://localhost:8080/customers')
      .then((response) => response.json())
      .then((res) => this.setState({ collection: res }))
  }
  onChange = (event) => {
    this.setState({ value: event.target.value })
  }
  render() {
    return (
      <div className="container mt-4">
        <h2>Customer Dropdown List</h2>
        <CustomerDropdown
          name={this.state.customerName}
          options={this.state.collection}
          onChange={this.onChange}
        />
      </div>
    )
  }
}

// import React, {Component } from 'react'
// import axios from 'axios';
// // import ReactHTMLTableToExcel from 'react-html-table-to-excel';
// // import './App.css';



// export class AddCustomerDetails extends Component {
// constructor(props) {
// super(props)
// this.state = {
// // CustomerId: 1,
// CustomerData: []
// }
// }

// componentDidMount() {
// axios.get('http://localhost:8080/customers').then(response => {
// console.log(response.data);
// this.setState({
// CustomerData: response.data
// });
// });
// }

// ChangeState = (e) => {
// this.setState({
// CustomerName: e.target.value
// });
// }

// render() {  
// return (  
// <div>  
// <div class="row" className="hdr">  
// <div class="col-sm-12 btn btn-info">  
// Add Customer Name
// </div>  
// </div>  
// <div className="form-group dropdn">  
// <select className="form-control" name="customer" value={this.state.CustomerName} onChange={this.ChangeState}  >  
// <option>Select Customer</option>  
// {this.state.CustomerData.map((e, key) => {  
// return <option key={key} value={e.CustomerName}>{e.CustomerName}</option>;  
// })}  
// </select>  
// </div>  
// </div>
// )  
// }  
// }

// export default AddCustomerDetails;