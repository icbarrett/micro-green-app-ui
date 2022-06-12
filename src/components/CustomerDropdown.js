import React from "react";
import { Component } from "react";

class CustomerDropdown extends Component {
  state = {
    customerNames: [],
    selectedCustomerName: "",
    validationError: ""
  };

  componentDidMount() {
    fetch(
      "http://localhost:8080/customers"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        let customersFromApi = data.map(customerName => {
          return { value: customerName, display: customerName };
        });
        this.setState({
          customerNames: [
            {
              value: "",
              display:
                "(Select Customer)"
            }
          ].concat(customersFromApi)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <select
          value={this.state.selectedCustomerName}
          onChange={e =>
            this.setState({
              selectedCustomerName: e.target.value,
              validationError:
                e.target.value === ""
                  ? "You must select a customer"
                  : ""
            })
          }
        >
          {this.state.customerNames.map(customerName => (
            <option
              key={customerId.value}
              value={customerName.value}
            >
              {customerName.display}
            </option>
          ))}
        </select>
        <div
          style={{
            color: "red",
            marginTop: "5px"
          }}
        >
          {this.state.validationError}
        </div>
      </div>
    );
  }
}

export default CustomerDropdown;