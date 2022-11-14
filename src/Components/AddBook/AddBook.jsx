import { Container, Row } from 'react-bootstrap'
import './AddBook.css';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

function AddBook() {
    const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    console.log({event})
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
}
  return (
    <>
        <Container className="mt-5 pt-5 justify-content-center">
            <Row className="justify-content-center out">
                
            <Form noValidate validated={validated} onSubmit={handleSubmit} className='addform'>
            <h3>Book Details</h3>
      <Row className="mb-3 justify-content-center">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            required
            type="text"
            
          />
          
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>ISBN No.</Form.Label>
          <Form.Control
            required
            type="number"
            
          />
          
        </Form.Group>
        
      </Row>
      <Row className="mb-6 justify-content-center">

      <Form.Group as={Col} md="3" controlId="validationCustomUsername">
          <Form.Label>Author</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
            />
            
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom03">
          <Form.Label>Total No. of Copies</Form.Label>
          <Form.Control type="number"  required />
          
        </Form.Group>
        
      </Row>
      <Row className="mb-6 justify-content-center">

      <Form.Group as={Col} md="6" controlId="validationCustomUsername">
          <Form.Label>Image</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              aria-describedby="inputGroupPrepend"
              required
            />
            
          </InputGroup>
        </Form.Group>
        
      </Row>
      
      <Button type="submit" className='mt-3'>Add</Button>
    </Form>
            </Row>
        </Container>
    </>
  )
}

export default AddBook