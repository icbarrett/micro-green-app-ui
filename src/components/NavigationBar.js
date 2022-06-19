import React from 'react';

import '../App.css';
//import nav bar and container components for react bootstrap
import { Nav, Navbar, Container } from 'react-bootstrap';

//import Logo
import logo from '../assets/ingismicrogreenstransparentV1.png';

//wrap react bootstrap element in <LinkContainer> to make it behave like a react router
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar () {


return (
      <div className='App'>
        {/* navigation html with bootstrap  */}
        <Navbar bg="light" expand="lg">
          <Container fluid>
              <LinkContainer to = "/Home">
            <Navbar.Brand>
              <img 
                alt="Logo"
                src={logo}
                width="100"
                height="100"
                className="d-inline-block align-top"/>{' '}
            </Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav"> 
              <Nav className="me-auto">
                  <LinkContainer to = "/Home"><Nav.Link>Home</Nav.Link></LinkContainer>
                  <LinkContainer to = "/inventory"><Nav.Link>Inventory</Nav.Link></LinkContainer>
                  <LinkContainer to = "/trays"><Nav.Link>Tray</Nav.Link></LinkContainer>
                  <LinkContainer to = "/customers"><Nav.Link>Customer</Nav.Link></LinkContainer>
                  <LinkContainer to = "/orders"><Nav.Link>Orders</Nav.Link></LinkContainer>
                  <LinkContainer to = "/NewCalendar"><Nav.Link>Calendar</Nav.Link></LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </div>
)}

export default NavigationBar;