import React, { useState } from "react";
import { Container } from "react-bootstrap";
import axios from "../../axios";
import { useEffect } from "react";
import TableRow from "./TableRow";
import Navigation from "../Nav/Navigation";
function Checkout() {
  const [orders, setOrders] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    axios
      .get(`/user/getUser/${userId}`)
      .then((response) => {
        if (response.data) {
          setOrders(response.data.orders);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);

  return (
    <>
          <Navigation />

      <Container className="mt-5 pt-5">
        <h3>List Of Books taken</h3>
        <table className="table table-striped-columns shadow">
          <thead>
            <tr>
              <th>Book ID</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>CheckOut Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <TableRow
                order={order}
                key={order.bookId}
                setUpdate={() => setUpdate(!update)}
              />
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
}

export default Checkout;
