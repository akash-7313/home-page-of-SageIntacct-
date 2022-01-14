import React from 'react';
import { Accordion, Card, Col, Row } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import digiWorld from "../../images/intelligent-organization.png";


const DigitalWorld = () => {
    return (
      <div className="container my-5">
        <div className="">
          <h2 className="fw-bold">
            Thrive in today’s ever-changing, digital world
          </h2>
          <p className="fs-2">with connected solutions that simply work</p>
        </div>
        <div className="">
          <Row xs={1} md={2} className="g-0">
            <Col className="p-3">
              <Card.Img
                variant="top"
                src={digiWorld}
                className="img-fluid h-100 w-100 p-5"
              />
            </Col>
            <Col className="p-1">
              <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <i className="fas fa-coins me-1"></i> Financials
                  </Accordion.Header>
                  <Accordion.Body className="accordion-txt text-start text-muted">
                    <p>
                      Free up more time to think strategically and guide your
                      organization
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Slice and dice your data with</b> real-time,
                        multi-dimensional reporting
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Consolidate all your entities in minutes,</b> no more
                        spreadsheets
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Automate mundane accounting tasks</b> to increase
                        your efficiency up to 90%
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Free your teams to focus on higher value work</b>
                        with AI-powered solutions
                      </span>
                    </p>
                    <NavLink
                      to="/"
                      className="accordion-txt nav-txt text-decoration-none text-success"
                    >
                      Learn about Core Financials
                      <i className="fas fa-long-arrow-alt-right ms-1"></i>
                    </NavLink>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <i className="fas fa-chart-line me-1"></i>Planning
                  </Accordion.Header>
                  <Accordion.Body className="accordion-txt text-start text-muted">
                    <p>
                      Enable your organization to budget, plan, and quickly
                      adapt to ever-changing conditions
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Plan using live financial data</b> via our native,
                        bi-directional connector
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Get up and running in days</b> on an intuitive
                        solution, built for finance users
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Monitor performance in real-time</b> with interactive
                        reports and dashboards
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Reforecast your business in days</b> with powerful
                        what-if scenario modeling
                      </span>
                    </p>
                    <NavLink
                      to="/"
                      className="accordion-txt nav-txt text-decoration-none text-success"
                    >
                      Learn about Planning
                      <i className="fas fa-long-arrow-alt-right ms-1"></i>
                    </NavLink>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <i className="fas fa-chart-pie me-1"></i>Analytics
                  </Accordion.Header>
                  <Accordion.Body className="accordion-txt text-start text-muted">
                    <p>
                      Get instant, predictive insights to make data-driven
                      decisions
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Plug-and-play, native analytics</b> that use live
                        financial and statistical data
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Choose from over 200 prebuilt visuals,</b> , edit
                        them, or create your own
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Transform your decision-making</b> using dimensional,
                        predictive analytics
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Build new visuals and dashboards in minutes</b> to
                        explore data on the fly
                      </span>
                    </p>
                    <NavLink
                      to="/"
                      className="accordion-txt nav-txt text-decoration-none text-success"
                    >
                      Learn about Interactive Visual Explorer
                      <i className="fas fa-long-arrow-alt-right ms-1"></i>
                    </NavLink>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>
                    <i className="fas fa-users me-1"></i>HR & Payroll
                  </Accordion.Header>
                  <Accordion.Body className="accordion-txt text-start text-muted">
                    <p>
                      Empower your organization to take care of your greatest
                      asset, your people
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Get instant visibility into your people data</b> for
                        your local or global workforce
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Run payroll in a few simple steps</b> with the
                        leading mid-market payroll solution
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>Sync employee data to Sage Intacct in real-time,</b>
                        no duplicate data entry
                      </span>
                    </p>
                    <p>
                      <span>
                        <i className="fas fa-check me-1 text-success"></i>
                        <b>
                          Use your dimensions to streamline posting and
                          reporting
                        </b>
                        for payroll journal entries
                      </span>
                    </p>
                    <NavLink
                      to="/"
                      className="accordion-txt nav-txt text-decoration-none text-success me-5"
                    >
                      Learn about HR & People Management
                      <i className="fas fa-long-arrow-alt-right ms-1"></i>
                    </NavLink>
                    <NavLink
                      to="/"
                      className="accordion-txt nav-txt text-decoration-none text-success"
                    >
                      Learn about Payroll
                      <i className="fas fa-long-arrow-alt-right ms-1"></i>
                    </NavLink>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </div>
      </div>
    );
};

export default DigitalWorld;