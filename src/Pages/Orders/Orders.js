import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import OrdersTableRow from "./OrdersTableRow";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm(
      "Are You Sure Do You Want to Cancel this Order"
    );
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Order Deleted Successfully");
            const remaining = orders.filter((ord) => ord._id !== id);
            setOrders(remaining);
          }
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  };

  const handleStatusUpdate = (id) => {
    fetch(`http://localhost:5000/orders/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          const remaining = orders.filter((odr) => odr._id !== id);
          const approving = orders.find((odr) => odr._id === id);
          approving.status = "Approved";

          const newOrders = [approving, ...remaining];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div className="min-h-screen">
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Customer Details</th>
              <th>Service Details</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <OrdersTableRow
                key={order._id}
                order={order}
                handleDelete={handleDelete}
                handleStatusUpdate={handleStatusUpdate}
              ></OrdersTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
