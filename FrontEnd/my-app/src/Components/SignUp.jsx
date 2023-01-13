import React from "react";
import { useState } from "react";
import { FloatingLabel, Form, Container, Row, Col, Button } from "react-bootstrap";
import { inputChanger } from "../Utils/general";
import { useNavigate } from "react-router-dom"
import axios from "axios";

export default function Signup() {
const [name , setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [massage, setMassage] = useState();
const navigateUser = useNavigate();

const nameChanger = (event)=>{
  inputChanger(event, setName)
}

const emailChanger = (event)=>{
    inputChanger(event, setEmail)
}

const passwordChanger = (event)=>{
    inputChanger(event, setPassword)
}

const handelLoginEvent =async(event) => {
  event.preventDefault();
  const id = Date.now();
  const user_Record = {name, email, password, id };
  const url = "http://localhost:9000/signup";

  axios.post(url,user_Record).then((res)=>{
      console.log(res.data)
      const user_Details = res.data.userData
      const res_Massage = res.data.massage
      setMassage(res_Massage)
      if(user_Details){
        navigateUser("/login")
      }
  }).catch((err)=>{
    if(err) throw err;
  }) 
}

  return (
    <>
      <Container>
        <Row>
          <Col></Col>
          <Col>
          <h1>{massage}</h1>
          <Form method="POST" onSubmit={handelLoginEvent}>
            <FloatingLabel
              controlId="NameInput"
              label="Enter your name"
              className="mb-3"
            >
              <Form.Control type="text" placeholder="Enter your name" onChange={nameChanger} value={name} />
            </FloatingLabel>
            <FloatingLabel
              controlId="Emailinput"
              label="Email"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="enter your email" onChange={emailChanger} value={email} />
            </FloatingLabel>
            <FloatingLabel controlId="PasswordInput" label="Create Password">
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
