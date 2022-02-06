import React from 'react';
import { NavLink } from "react-router-dom";
import wholesaleImg from "../../../images/needs/accounting-financial-management-for-wholesale-distribution.png";

const Wholesale = () => {
    return (
      <div className='text-start'>
        <div>
          <p className="fw-bold fs-5">Wholesale Distribution</p>
          <p>
            Distributors are becoming more and more customer-centric. The trick?
            We’re helping them stock up on better business insights to improve
            productivity. Built from the ground up to be the best in the
            industry, Sage
          </p>
          <NavLink to="" className="slider-txt text-decoration-none">
            Wholesale Distribution industry
            <i className="fas fa-long-arrow-alt-right ms-1"></i>
          </NavLink>
        </div>
        <div className="mt-3">
          <img src={wholesaleImg} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default Wholesale;