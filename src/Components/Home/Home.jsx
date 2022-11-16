import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  const [items, setItems] = useState([])
  const role = localStorage.getItem("userRole")
  useEffect(()=>{
    axios
    .get("/book/view")
    .then((response)=>{
      setItems(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  })
  return (
    <>
    
      <Container className="mt-5 pt-5 justify-content-center">
        <Row className="justify-content-center ">
          {items.map((item)=>(
              <Card className="shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }} key={item.image}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.bookName}</Card.Title>
                <Card.Text style={{ alignSelf: "center", justifyContent: "center" }}>
                  Author : {item.author}
                </Card.Text>
                
                <Link to={role === "user" ? "/orders" : "/home"}>
                <Button style={{ alignSelf: "center" }} variant="primary" disabled={(role==="admin")}>Checkout</Button></Link>
              </Card.Body>
            </Card>

          ))}
        
          </Row>
      </Container>
    </>
  );
}

export default Home;
