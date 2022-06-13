import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const DetailOrders = ({match}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchDetailOrders();
}, []);

  const fetchDetailOrders = () => {
    axios
      .get(
        `http://localhost:8080/orders/${match.params.id}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
return (
    <div>
      
    </div>
  );
};
export default DetailOrders;