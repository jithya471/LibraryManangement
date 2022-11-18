import React, { useState } from "react";
import { Container, Navbar, Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const role = localStorage.getItem("userRole");
  console.log(role);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <Navbar
        fixed="top"
        bg="primary"
        varient="light"
        className="justify-content-center shadow"
      >
        <Container>
          <Navbar.Brand href="/">Library Management</Navbar.Brand>
        </Container>
        <Nav navbarScroll>
          <Link to={"/home"}>
            <Button variant="primary" size="sm">
              Home
            </Button>
          </Link>
          {role ? (
            <DropdownButton
              size="sm"
              variant="primary"
              title={localStorage.getItem("userName")}
              id="input-group-dropdown-1"
            >
              <Dropdown.Item onClick={handleClick}>Logout</Dropdown.Item>
            </DropdownButton>
          ) : (
            <Link to={"/login"}>
              <Button variant="primary" size="sm">
                Login
              </Button>
            </Link>
          )}
          <Link to={"/orders"}>
            {role === "user" ? (
              <Button variant="primary" size="sm" disabled={role === "admin"}>
                Orders
              </Button>
            ) : null}
          </Link>

          <Link to={"/signup"}>
            {!role ? (
              <Button variant="primary" size="sm" disabled={role === "admin"}>
                Register
              </Button>
            ) : null}
          </Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
