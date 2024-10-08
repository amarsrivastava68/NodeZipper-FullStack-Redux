import React, { useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader";
import "./LoginPage.css";
import MainScreen from "../../components/MainScreen";
import ErrorMessage from "../../components/ErrorMessage";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try {
      const config = {
        headers: { "Content-type": "application/json" },
      };

      setLoading(true);
      const {data} = await axios.post(
        "/api/users/login",
        { email, password },
        config
      );
      console.log(data);
      localStorage.setItem('userInfo' , JSON.stringify(data))
      setLoading(false);
  
    } catch (error) {
      setError(error.response.data.message)
      setLoading(false)
      console.log(error)
    }
  };
  return (
    <MainScreen title="LOGIN">
       {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
       {loading && <Loader/>}
      <div className="loginContainer">
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>
      </div>
      
    </MainScreen>
  );
};

export default LoginPage;
