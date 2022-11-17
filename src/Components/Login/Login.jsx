import axios from "../../axios";
import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Navigation from "../Nav/Navigation";

function Login() {
  const useremail = useRef("");
  const userpassword = useRef("");
  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const email = useremail.current.value;
    const password = userpassword.current.value;

    axios({
      method: "post",
      url: "/user/login",
      data: {
        email,
        password,
      },
    })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("userRole", response.data.role);
          localStorage.setItem("userName", response.data.userName);
          if (response.data.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/home");
          }

          alert("Logged in");
          console.log(response.data.userName);
        } else {
          alert("wrong email & password");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
          <Navigation />

      <Container className="mt-5 pt-5 justify-content-center">
        <div className="card mt-5 shadow" style={{ width: "25rem" }}>
          <form
            className="row g-3 needs-validation justify-content-center mt-2"
            style={{ padding: "40px" }}
            onSubmit={handlesubmit}
          >
            <div className="row justify-content-md-center">
              <div className="col-md-auto">
                <label htmlFor="email" className="form-label">
                  E-Mail
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                  ref={useremail}
                />
              </div>
            </div>
            <div className="row justify-content-md-center mt-2">
              <div className="col-md-auto">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  ref={userpassword}
                />
              </div>
            </div>
            <div className="col-12">
              <button
                className="btn btn-primary "
                style={{ alignSelf: "center" }}
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </Container>
    </>
  );
}

export default Login;
