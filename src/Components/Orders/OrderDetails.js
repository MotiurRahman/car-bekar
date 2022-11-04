import React, { useEffect, useState } from "react";

const OrderDetails = ({ order, handleDelete, handleStatusUpdate }) => {
  const {
    _id,
    serviceName,
    price,
    customer,
    email,
    phone,
    message,
    service,
    status,
  } = order;
  const [orderImg, setOrderImg] = useState({});

  useEffect(() => {
    fetch(`http://localhost:8000/service/${service}`)
      .then((res) => res.json())
      .then((data) => setOrderImg(data));
  }, [service]);

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn close">
          X
        </button>
      </th>
      <td className="flex items-center">
        <img
          style={{
            height: "100px",
            width: "120px",
            marginRight: "10px",
            borderRadius: "20px",
          }}
          src={orderImg.img}
          alt=""
        />{" "}
        {serviceName}
      </td>
      <td>{customer}</td>
      <td>{price}</td>
      <td>{phone}</td>
      <td>{message}</td>
      <td>
        <button
          onClick={() => handleStatusUpdate(_id)}
          className="btn btn-primary"
        >
          {status ? status : "Pending"}
        </button>
      </td>
    </tr>
  );
};

export default OrderDetails;
