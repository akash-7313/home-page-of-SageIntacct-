import React from 'react';
import { NavLink } from "react-router-dom";
import industryImg from "../../../images/needs/accounting-financial-management-for-any-industry .png";

const Industry = () => {
    return (
      <div>
        <div>
          <p className="fw-bold fs-5">For Any Industry</p>
          <p>
            The smart cloud accounting solution to unleash the potential of your
            business. Learn why industry leaders choose Sage Intacct—rated #1 in
            customer satisfaction by G2.
          </p>
          <NavLink to="/" className="slider-txt text-decoration-none">
            For Any Industry
            <i className="fas fa-long-arrow-alt-right ms-1"></i>
          </NavLink>
        </div>
        <div className="mt-3">
          <img src={industryImg} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default Industry;