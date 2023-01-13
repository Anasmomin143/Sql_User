import React from "react";
import { useState } from "react";
import { FloatingLabel, Form, Container, Row, Col, Button } from "react-bootstrap";
import { inputChanger } from "../Utils/general";

export default function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const emailChanger = (event)=>{
    inputChanger(event, setEmail)
}

const passwordChanger = (event)=>{
    inputChanger(event, setPassword)
}

const handelLoginEvent =(event) => {
  event.preventDefault();
  const user_Record = {email, password }
  console.log(user_Record)
}

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
          <Form method="post" onSubmit={handelLoginEvent}>
            <FloatingLabel
              controlId="Emailinput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="enter your email" onChange={emailChanger} value={email} />
            </FloatingLabel>
            <FloatingLabel controlId="PasswordInput" label="Password">
              <Form.Control type="password" placeholder="enter your password" onChange={passwordChanger} value={password} />
            </FloatingLabel>
            <br />
            <Button type="submit" variant="primary">Submit</Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
