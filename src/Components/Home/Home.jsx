import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { data } from "./data";
import "./Home.css";

function Home() {
  const [items, setItems] = useState(data)
  return (
    <>
      <Container className="mt-5 pt-5 justify-content-center">
        <Row className="justify-content-center ">
          {items.map((item)=>(
              <Card className="shadow p-3 mb-5 bg-body rounded" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={item.url} />
              <Card.Body>
                <Card.Title>{item.bookName}</Card.Title>
                <Card.Text style={{ alignSelf: "center", justifyContent: "center" }}>
                  Author : {item.author}
                </Card.Text>
                <Button style={{ alignSelf: "center" }} variant="primary">Checkout</Button>
              </Card.Body>
            </Card>

          ))}
        
          </Row>
      </Container>
    </>
  );
}

export default Home;
