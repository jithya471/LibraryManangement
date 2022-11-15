import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Admin.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../axios";

function Admin() {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    axios
      .get("/book/view")
      .then((response) => {
        setBookData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Container className="mt-5 pt-5 justify-content-center">
        <table className="table table-striped-columns">
          <thead>
            <tr>
              <th>Sl.No.</th>
              <th>ISBN No.</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>Total No. of Copies</th>
              <th>No. of copies available for checkout</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {bookData.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.isbn}</td>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{book.totalNo}</td>
                <td>{book.balCopies}</td>
                <td>
                  <div>
                  <Link to={"/edit/$(book.id)"}>
                    <Button variant="secondary" size="sm">
                      Edit
                    </Button>{" "}</Link>
                    <Button variant="secondary" size="sm">
                      Delete
                    </Button>{" "}
                  
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn">
          <Link to={"/addbook"}>
            <Button variant="primary" size="sm">
              Add Book
            </Button>{" "}
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Admin;
