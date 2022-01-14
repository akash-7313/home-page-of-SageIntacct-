import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from "react-bootstrap";
import footerLogo1 from "../../images/sage-intacct-logo.png";
import footerLogo2 from "../../images/aicpa-inline-square2.png";


const Footer = () => {
    return (
      <div>
        <div className="mb-5">
          <NavLink to="/" className="rounded-circle bg-dark px-2 py-1 me-2">
            <i className="fab fa-facebook-f text-white"></i>
          </NavLink>
          <NavLink to="/" className="rounded-circle bg-dark px-2 py-1 me-2">
            <i className="fab fa-linkedin-in text-white"></i>
          </NavLink>
          <NavLink to="/" className="rounded-circle bg-dark px-2 py-1 me-2">
            <i className="fab fa-twitter text-white"></i>
          </NavLink>
          <NavLink to="/" className="rounded-circle bg-dark px-2 py-1 me-2">
            <i className="fab fa-youtube text-white"></i>
          </NavLink>
          <NavLink to="/" className="rounded-circle bg-dark px-2 py-1 me-2">
            <i className="fab fa-instagram text-white"></i>
          </NavLink>
          <NavLink to="/" className="rounded-circle bg-dark px-2 py-1 me-2">
            <i className="fas fa-rss text-white"></i>
          </NavLink>
          <NavLink to="/" className="rounded-circle bg-dark px-2 py-1 me-2">
            <i className="far fa-clone text-white"></i>
          </NavLink>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-sm-12">
              <div className="card-body h-100">
                <div className="row">
                  <div className="col-12 col-lg-3 text-start nav flex-column mb-4 slide-txt">
                    <NavLink
                      className="text-decoration-none text-dark fw-bold mb-1"
                      to="/home"
                    >
                      Products
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Core Financials
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Dashboard and Reporting
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Billing
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Planning
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Sage Intacct Platform
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Advanced Functionality
                    </NavLink>
                  </div>
                  <div className="col-12 col-lg-3 text-start nav flex-column mb-4 slide-txt">
                    <NavLink
                      className="text-decoration-none text-dark fw-bold mb-1"
                      to="/home"
                    >
                      Services
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Support
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Training
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Community
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Professional Services
                    </NavLink>
                  </div>
                  <div className="col-12 col-lg-3 text-start nav flex-column mb-4 slide-txt">
                    <NavLink
                      className="text-decoration-none text-dark fw-bold mb-1"
                      to="/home"
                    >
                      Resource Center
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Upcoming Webinars
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Product Demos
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Data Sheets
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      White Papers
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Accounting Glossary
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Blog
                    </NavLink>
                  </div>
                  <div className="col-12 col-lg-3 text-start nav flex-column mb-4 slide-txt">
                    <NavLink
                      className="text-decoration-none text-dark fw-bold mb-1"
                      to="/home"
                    >
                      Quick Links
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Contact
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Customer Meetups
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Sage Transform
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      User Groups
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Recommend Sage Intacct
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Free 30-day Trial
                    </NavLink>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-lg-3 text-start nav flex-column mb-4 slide-txt">
                    <NavLink
                      className="text-decoration-none text-dark fw-bold mb-1"
                      to="/home"
                    >
                      Why Sage Intacct
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Industries
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Customer Case Studies
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Customer Videos
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Considering QuickBooks?
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Considering NetSuite?
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Considering Blackbaud?
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Considering Acumatica?
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Considering Abila MIP Fund
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Accounting?
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Considering MS Dynamics 365
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Business Central?
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Considering MS Dynamics GP?
                    </NavLink>
                  </div>
                  <div className="col-12 col-lg-3 text-start nav flex-column mb-4 slide-txt">
                    <NavLink
                      className="text-decoration-none text-dark fw-bold mb-1"
                      to="/home"
                    >
                      Partners
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Value Added Resellers
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Outsourcing Partners
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Marketplace Partners
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Become a Partner
                    </NavLink>
                  </div>
                  <div className="col-12 col-lg-3 text-start nav flex-column mb-4 slide-txt">
                    <NavLink
                      className="text-decoration-none text-dark fw-bold mb-1"
                      to="/home"
                    >
                      Company
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Careers
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Newsroom
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Events
                    </NavLink>
                    <NavLink
                      className="text-decoration-none text-dark"
                      to="/home"
                    >
                      Trust
                    </NavLink>
                  </div>
                  <div className="col-12 col-lg-3 text-start nav flex-column mb-4">
                    <Button
                      variant="success"
                      className="rounded-0 px-4 py-2 accordion-txt"
                    >
                      Subscribe to our newsletter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-12">
              <div className="card-body h-100">
                <div className="text-start">
                  <img alt="" src={footerLogo1} width="120" height="20" />
                </div>
                <div className="text-start slide-txt my-4">
                  <div>
                    <p className="foot-line">Sage Intacct</p>
                    <p className="foot-line">300 Park Avenue, Suite 1400</p>
                    <p className="foot-line">San Jose, CA 95110</p>
                  </div>
                  <div>
                    <p className="fw-bold">Sales Inquiries</p>
                    <p className="foot-line">877-437-7765</p>
                  </div>
                  <div>
                    <p className="fw-bold">Customer Support</p>
                    <p className="foot-line">
                      North America: 877-704-3700 (US toll
                    </p>
                    <p className="foot-line">free) or 408-785-7340</p>
                    <p className="foot-line">
                      United Kingdom: +44 (0)19 1479 5990
                    </p>
                    <p className="foot-line">Australia:+61 1300 729 330</p>
                    <p className="foot-line">
                      South Africa: +27 (0)11 304 3220
                    </p>
                  </div>
                </div>
                <div className="text-start">
                  <img alt="" src={footerLogo2} width="120" height="20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Footer;