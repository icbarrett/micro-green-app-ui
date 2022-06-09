import React from "react";
import axios from 'axios';

export default function OrderNew() {
  const [order, setOrder] = React.useState({
        orderDate: '',
        deliveryDate: '',
        orderDetails: [ 
          {
          qty: "",
        seed: {
          seedName: ""
        },
        tray:{
          trayType:""
        }
          }
        ],
        customer:{
          customerName:''
        }
        });
        //   console.log(order.orderDetails[0].seed);
        
        const onChange = e => {
          let data = { ...order };
          let name = e.target.name;
          let val = e.target.value;
          if (name == 'orderDate' || name == 'deliveryDate') {
            data = { 
                ...data, 
                [name]: val };
          }
           else if (name == 'qty' ) {
            data = {
              ...data,
              orderDetails: {
                ...data.orderDetails,
                [name]: val
            }
            };
          } else if (name == 'seedName') {
            data = {
              ...data,
              orderDetails: {
                ...data.orderDetails,
                seed: {
                  ...data.orderDetails.seed,
                  [name]: val
                }
            }
            };
          }else if (name == 'trayType') {
            data = {
              ...data,
              orderDetails: {
                ...data.orderDetails,
                tray: {
                  ...data.orderDetails.tray,
                  [name]: val
                }
            }
            };
          }else if (name == 'customerName') {
            data = {
              ...data,
              customer: {
                ...data.customer,
                  [name]: val
                }
              }
            }
          
          setOrder(data);
        };

        const submit = e => {
          e.preventDefault();

          axios.post("http://localhost:8080/orders/create", {
            "customerName":order.customer.customerName,
            "orderDate": order.deliveryDate,
            "deliveryDate":order.deliveryDate,
            "qty":order.orderDetails.qty,
            "seedName":order.orderDetails[0].seed.seedName,
            "trayType":order.orderDetails[0].tray.trayType
          }) .then((response) => {
            console.log(response.status);
            console.log(JSON.stringify(response.data));
          });
          
          // console.log(JSON.stringify(order));
        };

       
        return (
          <div>
            <form onSubmit={submit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Customer Name"
                  name="customerName"
                  defaultValue={order.customer.customerName}
                  onChange={onChange}
              />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter Order Date"
                  name="orderDate"
                  value={order.orderDate}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Enter Delivery Date"
                  name="deliveryDate"
                  value={order.deliveryDate}
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Order Quantity"
                  value={order.orderDetails.qty}
                  name="qty"
                  onChange={onChange}
                />
              </div>
                  <div className="form-group">
                  <input 
                      type="text"
                      className="form-control"
                      placeholder="Enter Seed Name"
                      defaultValue={order.orderDetails[0].seed.seedName}
                      name="seedName"
                      onChange={onChange} 
                      />
                     </div>
                  <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Tray Type"
                        defaultValue={order.orderDetails[0].tray.trayType}
                        name="trayType"
                        onChange={onChange} 
                        />
                       </div>             
              <div className="form-group">
                <button className="btn btn-primary" onClick={submit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        );
            }