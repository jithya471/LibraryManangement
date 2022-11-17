import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Admin.css";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "../../axios";
import Navigation from "../Nav/Navigation";

function Admin() {
  const [bookData, setBookData] = useState([]);
  const [update, setUpdate] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (!(localStorage.getItem("userRole") === "admin")) {
      return navigate("/");
    }
  }, []);

  useEffect(() => {
    axios
      .get("/book/view")
      .then((response) => {
        setBookData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [update]);

  const deleteBook = (bookId) => {
    axios.delete(`book/deletebook/${bookId}`).then((response) => {
      setUpdate(response.data).catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Navigation />

      <Container className="mt-5 pt-5 justify-content-center">
        <table className="table table-striped-columns shadow">
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
                    <div>
                      <Link to={`/admin/edit/${book.id}`}>
                        <Button variant="secondary" size="sm">
                          Edit
                        </Button>
                      </Link>
                    </div>
                    <div className="m-2 ">
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => deleteBook(book.id)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="btn">
          <Link to={"/addbook"}>
            <Button variant="primary" size="sm" style={{ alignSelf: "center" }}>
              Add Book
            </Button>{" "}
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Admin;
