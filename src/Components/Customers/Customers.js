import React from 'react';
import img1 from '../../images/trust/red-door-interactive-featured-customer.png';
import img2 from '../../images/trust/macon-bibb-county-industrial-authority-featured-customer.png';
import { Carousel } from 'react-bootstrap';

const Customers = () => {
    return (
      <div className="container my-5">
        <div className="text-start">
          <p className="fs-2">
            Trusted by <br /> <strong>over 15,000 customers</strong>
          </p>
        </div>
        <div>
          <Carousel variant="dark">
            <Carousel.Item>
              <div className="row px-5 py-3 mt-0 d-flex justify-content-between align-items-center">
                <div className="col-lg-6">
                  <p className="fs-3 text-start">Key Outcomes</p>
                  <div className="text-start">
                    <div className="d-flex align-items-center">
                      <p className="fs-2 fw-bold text-success me-4">12%</p>
                      <p>Improved profitability year over year</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="fs-2 fw-bold text-success me-4">85%</p>
                      <p>Reduced overall budgeting and planning time</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="fs-2 fw-bold text-success me-4">33%</p>
                      <p>Accelerated time to finalize budgets</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={img1} className="d-block w-100 py-5" alt="..." />
                  <div className="text-start">
                    <p>
                      The first time I pulled up Sage Intacct Budgeting and
                      Planning in our executive meeting, they were blown away by
                      how quickly I was able to create a scenario, plug in what
                      they were asking for, and show the results in real-time.
                      Our leadership was impressed with how well the solution
                      worked, saw its value off the bat, and now they want me to
                      bring it every time they review budgets.
                    </p>
                    <h6>Natalie Bonczek</h6>
                    <p>Controller, Red Door Interactive</p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="row p-5 d-flex justify-content-between align-items-center">
                <div className="col-lg-6">
                  <p className="fs-3 text-start">Key Outcomes</p>
                  <div className="text-start">
                    <div className="d-flex align-items-center">
                      <p className="fs-2 fw-bold text-success me-4">85%</p>
                      <p>Increased overall finance efficiency</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="fs-2 fw-bold text-success me-4">92%</p>
                      <p>Decreased audit cycle times</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <p className="fs-2 fw-bold text-success me-4">100%</p>
                      <p>Shifted to electronic processes and workflows</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img src={img2} className="d-block w-100 py-5" alt="..." />
                  <div className="text-start">
                    <p>
                      Getting reputable system like Sage Intacct in place has
                      been a big win for us. We now have the ability to be
                      transparent and show our mayor, our commission, and even
                      our partners what we are doing with our funds. This has
                      greatly increased our community’s trust.
                    </p>
                    <h6>Amy Tarpley</h6>
                    <p>
                      Director of Finance, Macon-Bibb County Industrial
                      Authority
                    </p>
                  </div>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
};

export default Customers;