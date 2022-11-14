import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';
import Col from 'react-bootstrap/Col';

function Login() {
  return (
    <>
    <Container className="mt-5 pt-5 justify-content-center">
      <Row className="justify-content-center wrap">
        
    <Container >
    <Row className="mb-3 justify-content-center">
    <h3>Login</h3>
    <Form className='form justify-content-center'>
    <Row className="mb-3 justify-content-center">
      <Form.Group as={Col} md="4" className="mb-3 input" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group></Row>
      <Row className="mb-3 justify-content-center">
      <Form.Group as={Col} md="4" className="mb-3 input" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group></Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form></Row>
    </Container>
    </Row>
    </Container>
    </>
  )
}

export default Login