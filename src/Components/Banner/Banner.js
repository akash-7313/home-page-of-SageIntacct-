import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import banner from "../../images/accounting-financial-management-software-header.png";

const Banner = () => {
  return (
    <div>
      <div className="bg-light">
        <div className="container">
          <Row xs={1} md={2} className="g-0 py-5 px-3">
            <Col className="pb-3">
              <Card.Body>
                <Card.Title className="fs-2 text-start fw-bold">
                  The Leader in <br /> Accounting and Financial <br />{" "}
                  Management Software
                </Card.Title>
                <Card.Text className="text-muted text-start">
                  Whether you’re a growing startup or an established public
                  company, we’re the right partner for your long-term success.
                </Card.Text>
                <div className="text-start">
                  <Button
                    variant="outline-success"
                    className="rounded-0 px-4 py-2 mt-3 nav-txt"
                  >
                    Watch demo
                  </Button>
                </div>
              </Card.Body>
            </Col>
            <Col className="d-flex align-items-center justify-content-center">
              <Card.Img
                variant="top"
                src={banner}
                className="img-fluid h-75 w-75 shadow rounded-2"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="container banner-footer px-2">
        <Row xs={1} md={3} className="g-0">
          <Col className="p-3">
            <Card.Body className="h-100 border-end border-2 border-secondary text-start">
              <Card.Title className="fs-6">
                See Sage Intacct in action
              </Card.Title>
              <Card.Text className="btn-txt">
                Learn what Sage Intacct can offer you with a live demo followed
                by Q&A.
              </Card.Text>
              <Card.Text>
                <NavLink
                  to="/"
                  className="nav-txt text-decoration-none text-success"
                >
                  Sign up now <i className="fas fa-long-arrow-alt-right"></i>
                </NavLink>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="p-3">
            <Card.Body className="h-100 border-end border-2 border-secondary text-start">
              <Card.Title className="fs-6">
                #1 for the 5th year in a row
              </Card.Title>
              <Card.Text className="btn-txt">
                Once again, Sage Intacct received the highest product score in
                core financials for the lower midsize enterprises use case from
                Gartner1.
              </Card.Text>
              <Card.Text>
                <NavLink
                  to="/"
                  className="nav-txt text-decoration-none text-success"
                >
                  Read report <i className="fas fa-long-arrow-alt-right"></i>
                </NavLink>
              </Card.Text>
            </Card.Body>
          </Col>
          <Col className="p-3">
            <Card.Body className="h-100 text-start">
              <Card.Title className="fs-6">Outgrowing QuickBooks?</Card.Title>
              <Card.Text className="btn-txt">
                Find out why thriving organizations say goodbye to QuickBooks
                and partner with Sage Intacct to power their growth.
              </Card.Text>
              <Card.Text>
                <NavLink
                  to="/"
                  className="nav-txt text-decoration-none text-success"
                >
                  Learn why <i className="fas fa-long-arrow-alt-right"></i>
                </NavLink>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Banner;
