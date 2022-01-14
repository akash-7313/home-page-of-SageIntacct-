import React from "react";
import './Header.css';
import logo from "../../images/sage-intacct-logo.png";
import { Container, Nav, Navbar, Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div>
        <div className="nav-bg accordion-txt text-white">
          <Container>
            <Row xs={1} md={3} className="g-0">
              <Col></Col>
              <Col className="py-2">
                <span className="head-txt">
                  Watch a short interactive demo and live Q&A – Sign up now
                  <i className="fas fa-long-arrow-alt-right ms-1"></i>
                </span>
              </Col>
              <Col className="py-2 text-sm-end text-center">
                <i className="fas fa-search me-3"></i>
                <NavLink
                  to="/"
                  className="text-decoration-none text-white me-4 head-txt"
                >
                  Contact<i className="fas fa-chevron-down fa-txt"></i>
                </NavLink>
                <NavLink
                  to="/"
                  className="text-decoration-none text-white me-4 head-txt"
                >
                  Sign in<i className="fas fa-chevron-down fa-txt"></i>
                </NavLink>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Navbar bg="light" expand="lg" className="py-1">
        <Container>
          <Navbar.Brand href="#home">
            <img alt="" src={logo} width="120" height="20" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <NavLink
                to="/products"
                className="text-decoration-none text-danger me-4 nav-txt"
              >
                Products<i className="fas fa-chevron-down fa-txt"></i>
              </NavLink>
              <NavLink
                to="/industries"
                className="text-decoration-none text-danger me-4 nav-txt"
              >
                Industries<i className="fas fa-chevron-down fa-txt"></i>
              </NavLink>
              <NavLink
                to="/services"
                className="text-decoration-none text-danger me-4 nav-txt"
              >
                Services<i className="fas fa-chevron-down fa-txt"></i>
              </NavLink>
              <NavLink
                to="/partners"
                className="text-decoration-none text-danger me-4 nav-txt"
              >
                Partners<i className="fas fa-chevron-down fa-txt"></i>
              </NavLink>
              <NavLink
                to="/resources"
                className="text-decoration-none text-danger me-4 nav-txt"
              >
                Resources<i className="fas fa-chevron-down fa-txt"></i>
              </NavLink>
              <NavLink
                to="/company"
                className="text-decoration-none text-danger me-4 nav-txt"
              >
                Company<i className="fas fa-chevron-down fa-txt"></i>
              </NavLink>
            </Nav>
            <Button variant="success" className="rounded-0 py-1 btn-txt">
              Get pricing
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
