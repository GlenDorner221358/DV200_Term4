import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';
import { useState, useEffect } from "react";
import Axios from 'axios'

function BasicNav() {
  const user = sessionStorage.getItem("User")

  const handleLogout = () =>{
    localStorage.removeItem("token")
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('User')
    window.location = "/";
  }

  return (
    <Navbar className="bg-body-warning">
      <Container>
        <Navbar.Brand href="/">Whirlpool</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/landing">Home</Nav.Link>
            <Nav.Link href="/question">Questions</Nav.Link>
            <Nav.Link href="/profile">My Profile</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href='/profile' style={{marginRight:"2%"}}>{user}</Nav.Link>
          <Button variant='danger' onClick={handleLogout}>Logout</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicNav;