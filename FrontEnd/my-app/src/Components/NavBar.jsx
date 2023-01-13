import React from 'react';
import {Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
   <>
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand >JWT</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Link className='nav-link' aria-current="page" to="/login">Login</Link>
          <Link className='nav-link' aria-current="page" to="/signup">Signup</Link>
          <Link className='nav-link' aria-current="page" to="/user">User</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </>
  )
}
