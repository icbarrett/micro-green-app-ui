import React, { useState } from 'react';

import '../App.css';
//import nav bar and container components for react boostrap
import { Nav, Navbar, Container } from 'react-bootstrap';

//import Logo
import logo from '../assets/ingismicrogreenstransparentV1.png';

function NavigationBar() {
  return (
    //navigation html with bootstrap
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="#home">
        <img 
          alt="Logo"
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"/>{' '}
        Ingi's Microgreens
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#inventory">Inventory</Nav.Link>
          <Nav.Link href="#orders">Orders</Nav.Link>
          <Nav.Link href="#calendar">Calendar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default NavigationBar;