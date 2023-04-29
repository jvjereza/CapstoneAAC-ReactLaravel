import React, { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar expand="md" fixed="top" bg="dark" variant="dark" expanded={expanded}>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img src="img/Capture4.PNG" height="30" className="d-inline-block align-top" alt="AAC logo" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarResponsive" onClick={handleToggle} />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ml-auto">
            <LinkContainer to="/" exact>
              <Nav.Link onClick={() => setExpanded(false)}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link onClick={() => setExpanded(false)}>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/project">
              <Nav.Link onClick={() => setExpanded(false)}>Project</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/productionteam">
              <Nav.Link onClick={() => setExpanded(false)}>Production Team</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/materials">
              <Nav.Link onClick={() => setExpanded(false)}>Materials</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/payment">
              <Nav.Link onClick={() => setExpanded(false)}>Payment</Nav.Link>
            </LinkContainer>
            <Nav.Link
              href="https://api.whatsapp.com/send?phone=%2B639683590382&fbclid=IwAR3_TNOTKLQYh-bIJAAolN2LYUglv-lRJl6YqKn8PqNPd9DUz0IoIjhKgos"
              target="_blank"
              rel="noreferrer"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
            <LinkContainer to="/signin">
              <Nav.Link onClick={() => setExpanded(false)}>Sign Up/Sign In</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
        <LinkContainer to ="/adminLogin"></LinkContainer>
      </Container>
    </Navbar>
  );
};

export default NavBar;
