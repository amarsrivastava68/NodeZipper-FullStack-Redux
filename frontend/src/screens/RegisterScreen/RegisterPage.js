import { useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Form, Button } from "react-bootstrap";
import Loader from "../../components/Loader";
import ErrorMessage from "../../components/ErrorMessage";
import "./RegisterScreen.css";
import axios from 'axios'
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmpassword)
    {
      setMessage('Passwords do not match . . . ')
    }
    else {
      setMessage(null)
      try {const config = {
        headers: { "Content-type": "application/json" },
      };

      setLoading(true);
      const {data} = await axios.post(
        "/api/users",
        { name , email, password , pic   },
        config
      );
      setLoading(false)
      console.log(data)
      localStorage.setItem('userInfo' , JSON.stringify(data))

        
      } catch (error) {
        setError(error.response.data.message )
        setLoading(false)
      } 
    }
    console.log(email);
  };
  const handleFileUpload = (pics) => {};
  return (
    <MainScreen title="REGISTER">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              value={name}
              placeholder="Enter name"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

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

          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              value={confirmpassword}
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          {/* {picMessage && (
            <ErrorMessage variant="danger">{picMessage}</ErrorMessage>
          )} */}
          <Form.Group controlId="formFile">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control type="file" onChange={(e) => handleFileUpload(e)} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </div>
    </MainScreen>
  );
};
export default RegisterPage;
