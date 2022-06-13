import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const DetailOrders = () => {
  const [data, setData] = useState();
  const {orderId} = useParams();

  useEffect(() => {
    fetchDetailOrders();
}, []);

  const fetchDetailOrders = () => {
    axios
      .get(
        `http://localhost:8080/orders/${orderId}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
 
return (
  <div>
    {data.map((item) => {
      return (
        <div className='product-container' key={item.id}>
          <div>
            <img className='prod-image' src={item.image} alt='' />
          </div>
          <div>
            <h1 className='brand'>{item.brand}</h1>
            <h2>{item.item}</h2>
            <p>{item.description}</p>
            <p>
              <strong>Price:</strong> {item.price}
            </p>
            <p>
              <strong>Color:</strong> {item.color}
            </p>
          </div>
        </div>
      );
    })}
  </div>
);
};
export default DetailOrders;