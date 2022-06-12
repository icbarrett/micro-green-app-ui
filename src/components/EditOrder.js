import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function EditOrder() {
  const [order, setOrder] = React.useState({
    orderDate: '',
    deliveryDate: '',
    orderDetails: [ 
      {
      qty: '',
    seed: {
      seedName: ''
    },
    tray:{
      trayType:''
    }
      }
    ],
    customer:{
      customerName:''
    }
  });

  const {orderId} = useParams();
//   const history = useHistory();
    console.log(order);

  const onChange = e => {
    let data = { ...order };
    let name = e.target.name;
    let val = e.target.value;
    if (name == 'orderDate' || name == 'deliveryDate') {
      data =
       { ...data,
         [name]: val };
    } else if (name == 'qty'){
      data = {
        ...data,
        orderDetails: {
          ...data.orderDetails,
          [name]: val
        }
      };
    } else if (name == 'seedName'){
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
    }else if (name == 'trayType'){
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
     } else if (name == 'customerName'){
            data = {
              ...data,
              customer: {
                ...data.customer,
                [name]: val
              }
            };
        }
    setOrder(data);
  };

  const submit = (e) => {
    e.preventDefault();
    axios({
      method: "PUT",
      url: `http://localhost:8080/orders/update/${orderId}`,
      data: {
            orderDate,
            deliveryDate,
            customer:{
              customerName,
            orderDetails: [ 
              {
              qty,
            seed: {
              seedName
            },
            tray:{
              trayType
            }
              }
            ]
      },
    }
    }).then((res) => {
        console.log(res.data);
    
    // .then(response => {
    //     console.log(response.data)
    //     this.setState({
    //         setOrder
        //   });
    //   history.push(`/success/` + id);
      
    });
  };
//   const submit = e => {
//     e.preventDefault();
//     console.log(JSON.stringify(order));
//   };
  return (
    <div>
      <form action="">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Customername"
            name="customerName"
            value={order.customer.customerName}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="SeedName"
            value={order.orderDetails.seed.seedName}
            name="seedName"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="TrayType"
            name="trayType"
            value={order.orderDetails.tray.trayType}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="number"
            className="form-control"
            placeholder="OrderQuantity"
            name="qty"
            value={order.orderDetails.qty}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="OrderDate"
            value={order.orderDate}
            name="orderDate"
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            className="form-control"
            placeholder="Delivery Date"
            value={order.deliveryDate}
            name="deliveryDate"
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