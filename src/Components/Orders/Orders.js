import React, { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../Context/AuthContext";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const { user } = useContext(AuthUserContext);
  const [Orders, setOrder] = useState([]);

  const url = `http://localhost:8000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    if (window.confirm("Would you like to delete")) {
      fetch(`http://localhost:8000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = Orders.filter((order) => order._id != id);
          setOrder(remaining);
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:8000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = Orders.filter((order) => order._id != id);
          const approving = Orders.find((order) => order._id == id);
          approving.status = "Approved";
          const newOrders = [approving, ...remaining];
          setOrder(newOrders);
        }
      });
  };
  return (
    <div>
      <h3 className="text-3xl text-center my-9">
        You have {Orders.length} orders
      </h3>
      <table className="table w-full">
        <thead>
          <tr>
            <th>Action</th>
            <th>Title</th>
            <th>Customer</th>
            <th>Price</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {Orders.map((order) => (
            <OrderDetails
              key={order._id}
              order={order}
              handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}
            ></OrderDetails>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
