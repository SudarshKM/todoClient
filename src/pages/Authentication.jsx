import React, { useState } from "react";

import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { registerUserApi } from "../../server/allApi";

function Authentication({ login, register }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(user);
  const navigate = useNavigate();

  const registerUser = async () => {
    const { username, email, password } = user;
    const reqBody = {
      username,
      email,
      password,
    };

    if (!username || !email || !password) {
      alert("Please fill the form completely");
    } else {
      const result = await registerUserApi(reqBody);

      if (result.status == 200) {
        alert("Registration successfull");
      } else if (result.response.status == 406) {
        alert("Account already exist");
      }

      console.log(result);
    }
  };

  function goToRegister() {
    navigate("/register");
  }

  function goToLogIn() {
    navigate("/login");
  }
  return (
    <>
      {login ? (
        <div
          className="w-100 d-flex align-items-center justify-content-center "
          style={{
            height: "100vh",
            backgroundColor: "#EBFFFB",
            color: "whitesmoke",
            margin: "0",
          }}
        >
          <div className="w-100">
            <Row className="p-5" style={{ height: "67vh" }}>
              <Col md={3}></Col>
              <Col
                md={3}
                style={{ backgroundColor: "#96BAFF" }}
                className="rounded m-1 p-3 d-flex align-items-center justify-content-center flex-column"
              >
                <h3 className="text-center text-light">Sign In</h3>
                <form action="">
                  <input
                    className="form-control mt-3"
                    type="email"
                    placeholder="email"
                  />
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="password"
                  />
                  <div className="d-flex justify-content-center">
                    <button
                      style={{ backgroundColor: "#86A7FC" }}
                      className="btn  mt-3"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "#7C83FD" }}
                className="rounded m-1 p-3 d-flex align-items-center justify-content-center flex-column"
              >
                <h3 className="text-center text-light">New User ?</h3>
                <p className="text-center">
                  Enter your personal details and start journey with us
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    style={{ backgroundColor: "#86A7FC" }}
                    className="btn "
                    onClick={goToRegister}
                  >
                    Register
                  </button>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </div>
        </div>
      ) : (
        <div
          className="w-100 d-flex align-items-center justify-content-center "
          style={{
            height: "100vh",
            backgroundColor: "#EBFFFB",
            color: "whitesmoke",
          }}
        >
          <div className="w-100">
            <Row className="p-5" style={{ height: "67vh" }}>
              <Col md={3}></Col>
              <Col
                md={3}
                style={{ backgroundColor: "#96BAFF" }}
                className="rounded m-1 p-3 d-flex align-items-center justify-content-center flex-column"
              >
                <h3 className="text-center text-light">Sign Up</h3>
                <form action="">
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="username"
                    onChange={(e) => {
                      setUser({ ...user, username: e.target.value });
                    }}
                  />
                  <input
                    className="form-control mt-3"
                    type="email"
                    placeholder="email"
                    onChange={(e) => {
                      setUser({ ...user, email: e.target.value });
                    }}
                  />
                  <input
                    className="form-control mt-3"
                    type="password"
                    placeholder="password"
                    onChange={(e) => {
                      setUser({ ...user, password: e.target.value });
                    }}
                  />
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      style={{ backgroundColor: "#86A7FC" }}
                      className="btn  mt-3"
                      onClick={registerUser}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </Col>
              <Col
                md={3}
                style={{ backgroundColor: "#7C83FD" }}
                className="rounded m-1 p-3 d-flex align-items-center justify-content-center flex-column"
              >
                <h3 className="text-center text-light">Already a User ?</h3>
                <p className="text-center">
                  To keep connected with us please login with your personal info{" "}
                </p>
                <div className="d-flex justify-content-center">
                  <button
                    type="button"
                    style={{ backgroundColor: "#86A7FC" }}
                    className="btn "
                    onClick={goToLogIn}
                  >
                    Log In
                  </button>
                </div>
              </Col>
              <Col md={3}></Col>
            </Row>
          </div>
        </div>
      )}
    </>
  );
}

export default Authentication;
