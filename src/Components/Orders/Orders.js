import React, { useContext, useEffect, useState } from "react";
import { AuthUserContext } from "../../Context/AuthContext";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const { user, logout } = useContext(AuthUserContext);
  const [Orders, setOrder] = useState([]);

  const url = `https://curdapi.vercel.app/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          return logout();
        }
        return res.json();
      })
      .then((data) => {
        setOrder(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    if (window.confirm("Would you like to delete")) {
      fetch(`https://curdapi.vercel.app/orders/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("car-token")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = Orders.filter((order) => order._id != id);
          setOrder(remaining);
        });
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`https://curdapi.vercel.app/orders/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("car-token")}`,
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
        You have {Orders?.length} orders
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
          {Orders?.map((order) => (
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
