import React from "react";
import { Container, Navbar, Button, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      <Navbar fixed="top" bg="primary" varient="light" className="justify-content-center">
        <Container>
          <Navbar.Brand href="/">Library Management</Navbar.Brand>
        </Container>
        <Nav navbarScroll >
        <Link to={"/home"}>
          <Button variant="primary" size="sm">
            Home
          </Button>
        </Link>
        <Link to={"signup"}>
          <Button variant="primary" size="sm">
            Register
          </Button>
        </Link>
        <Link to={"/login"}>
          <Button variant="primary" size="sm" >
            Login
          </Button>
        </Link></Nav>

        <Nav>
          <NavDropdown title="user name">
            <NavDropdown.Item>Log Out</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
