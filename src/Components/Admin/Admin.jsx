import React, { useState } from 'react'
import { Container, Row } from 'react-bootstrap'
import './Admin.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { data } from '../Home/data';
function Admin() {

  const [bookData, setBookData] = useState(data)

  return (
    <>
            <Container className="mt-5 pt-5 justify-content-center">
            <Row className="justify-content-center ">
            <Table striped bordered hover size="sm">
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
      {bookData.map((book)=>(
        <tr>
        <td>{book.id}</td>
        <td>{book.isbn}</td>
        <td>{book.bookName}</td>
        <td>{book.author}</td>
        <td>{book.totalNo}</td>
        <td>{book.balCopies}</td>
        <td>
          <Link to={'/edit'}>
        <Button variant="secondary" size="sm">
        Edit
      </Button>{' '}
      <Button variant="secondary" size="sm">
        Delete
      </Button>{' '}</Link>
        </td>
      </tr>
      ))}
        
        
      </tbody>
    </Table>
    <div className='btn'>
      <Link to={'/addbook'}>
    <Button variant="primary" size="sm">
          Add Book
        </Button>{' '}</Link>
        </div>
            </Row>
        </Container>
    </>
  )
}

export default Admin