import axios from "../../axios";
import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";

function Home() {
  const [items, setItems] = useState([]);
  const [warning, setWarning] = useState(false);

  const role = localStorage.getItem("userRole");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`/user/getUser/${userId}`).then((response) => {
      const currentDate = moment(new Date());

      response.data.orders?.forEach((element) => {
        const checkoutDate = moment(element.checkoutDate);
        if (currentDate.diff(checkoutDate, "days") > 14) {
          setWarning(true);
        }
      });
    });

    axios
      .get("/book/view")
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleCheckout = (bookId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      return navigate("/login");
    }
    axios({
      method: "put",
      url: `/user/checkout/${userId}/${bookId}`,
    })
      .then((response) => {
        if (response.data) {
          navigate("/orders");
          console.log(response.data);
        } else {
          alert("You Already have taken 2 Books");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <>

      <Container className="mt-5 pt-5 justify-content-center">
        {warning && (
          <div className="alert alert-danger" style={{ textAlign: "center" }}>
            Time out to return Book
          </div>
        )}

        <Row className="justify-content-center ">
          {items.map((item) => (
            <Card
              className="shadow p-3 mb-5 bg-body rounded"
              style={{ width: "18rem" }}
              key={item.image}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.bookName}</Card.Title>
                <Card.Text
                  style={{ alignSelf: "center", justifyContent: "center" }}
                >
                  Author : {item.author}
                </Card.Text>
                <Button
                  style={{ alignSelf: "center" }}
                  variant="primary"
                  disabled={role === "admin" || item.balCopies < 1}
                  onClick={() => handleCheckout(item.id)}
                >
                  Checkout
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Home;
