import React from "react";
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import datasheetImg from '../../images/popular/datasheet.jpg';
import ebookImg from '../../images/popular/ebook.jpg';
import productImg from '../../images/popular/product-demo.jpg';
import webinarImg from '../../images/popular/webinar.jpg';


const Popular = () => {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    
  return (
    <div className="container mb-5">
      <h2 className="text-start">See what’s popular</h2>
      <Slider {...settings}>
        <div>
          <Card.Body className="h-100 text-start mt-3 popular-shadow  popular-bg">
            <Card.Text className="btn-txt">FEATURED WEBINAR:</Card.Text>
            <Card.Text className="btn-txt fw-bold">
              5 Signs Your Nonprofit Has <br /> Outgrown QuickBooks
            </Card.Text>
            <Card.Text className="btn-txt">
              Thursday, January 20, 2022, <br /> 11:00 am PT
            </Card.Text>
            <NavLink
              to="/"
              className="accordion-txt nav-txt text-decoration-none text-success"
            >
              Register
              <i className="fas fa-long-arrow-alt-right ms-1"></i>
            </NavLink>
          </Card.Body>
        </div>
        <div>
          <Card.Body className="h-100 popular-shadow text-start">
            <Card.Img
              variant="top"
              src={datasheetImg}
              className="img-fluid h-25 w-100"
            />
            <Card.Text className="btn-txt pt-2">Datasheet</Card.Text>
            <Card.Text className="btn-txt fw-bold">
              Sage Intacct – Connected Solutions for Today’s Digital World
            </Card.Text>
          </Card.Body>
        </div>
        <div>
          <Card.Body className="h-100 popular-shadow text-start">
            <Card.Img
              variant="top"
              src={productImg}
              className="img-fluid h-25 w-100"
            />
            <Card.Text className="btn-txt pt-2">Product demo</Card.Text>
            <Card.Text className="btn-txt fw-bold">
              Learn about Our Natively Connected Budgeting and Planning
            </Card.Text>
          </Card.Body>
        </div>
        <div>
          <Card.Body className="h-100 popular-shadow text-start">
            <Card.Img
              variant="top"
              src={ebookImg}
              className="img-fluid h-25 w-100"
            />
            <Card.Text className="btn-txt pt-2">eBook</Card.Text>
            <Card.Text className="btn-txt fw-bold">
              See What’s Top of Mind for 1,600+ Finance Leaders like You
            </Card.Text>
          </Card.Body>
        </div>
        <div>
          <Card.Body className="h-100 popular-shadow text-start">
            <Card.Img
              variant="top"
              src={webinarImg}
              className="img-fluid h-25 w-100"
            />
            <Card.Text className="btn-txt pt-2">Webinar</Card.Text>
            <Card.Text className="btn-txt fw-bold">
              Register for an Upcoming Live Webinar
            </Card.Text>
          </Card.Body>
        </div>
        <div>
          <Card.Body className="h-100 popular-shadow text-start mb-5">
            <Card.Img
              variant="top"
              src={datasheetImg}
              className="img-fluid h-25 w-100"
            />
            <Card.Text className="btn-txt pt-2">Datasheet</Card.Text>
            <Card.Text className="btn-txt fw-bold">
              Transform your Decision Making with Native, Predictive Analytics
            </Card.Text>
          </Card.Body>
        </div>
      </Slider>

      <div className="mt-5 text-start">
        <NavLink
          to="/"
          className="accordion-txt slider-txt text-decoration-none"
        >
          View all accounting and financials resources
          <i className="fas fa-long-arrow-alt-right ms-1"></i>
        </NavLink>
        <p className="slide-txt mt-5 pt-2 border-top border-secondary">
          1. Gartner, Inc., “Critical Capabilities for Cloud Core Financial
          Management Suites for Midsize, Large, and Global Enterprises”; Robert
          Anderson, John Van Decker, Greg Leiter; May 11, 2021 (ID: G00733936)
          (In the 2017 report Sage Intacct was recognized as “Intacct”)
        </p>
      </div>
    </div>
  );
}

export default Popular;