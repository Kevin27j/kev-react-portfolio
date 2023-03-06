import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#/">Kev//Dev</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" variant="tabs" defaultActiveKey="/home">
            <Nav.Link href="#home">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#projects">
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Projects
              </NavLink>
            </Nav.Link>
            <Nav.Link href="#contact">
              <NavLink
                to="contact"
                className={({ isActive }) =>
                  isActive ? 'nav-link active' : 'nav-link'
                }
              >
                Contact
              </NavLink>
            </Nav.Link>
          </Nav>
          <Button variant="outline-success" href="#">Resume</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;