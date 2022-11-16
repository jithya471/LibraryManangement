import React, { useState } from "react";
import { Container } from 'react-bootstrap'
import axios from "../../axios";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import Button from "react-bootstrap/Button";


function Checkout() {

  const [bookData, setBookData] = useState([]);
  const {bookId} = useParams()
  
  useEffect(() => {
    axios
      .get(`/getbook/${bookId}`)
      .then((response) => {
        setBookData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
     
  }, []);

  return (
    <>
    <Container>
        <h3>List Of Books</h3>
        <table class="table table-striped-columns shadow">
        <thead>
            <tr>
              <th>Sl.No.</th>
              <th>ISBN No.</th>
              <th>Book Name</th>
              <th>Author</th>
              <th>CheckOut Date</th>
              <th>Action</th>
            </tr>
            <tbody>
            {bookData.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.isbn}</td>
                <td>{book.bookName}</td>
                <td>{book.author}</td>
                <td>{}</td>
                <td>
                  <div>
                  <Button variant="secondary" size="sm" >
                      Return
                    </Button>
                  </div>
                  </td></tr>))}
            </tbody>
          </thead>
</table>
    </Container>

    </>
  )
}

export default Checkout