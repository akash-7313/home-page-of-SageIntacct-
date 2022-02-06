import React from 'react';
import { NavLink } from 'react-router-dom';
import financialImg from "../../../images/needs/accounting-financial-management-for-financial-services.png";

const Financial = () => {
    return (
      <div className="text-start">
        <div>
          <p className="fw-bold fs-5">Financial Services</p>
          <p>
            The #1 accounting software provider trusted by leading firms across
            the financial services industry, including: wealth and asset
            management, real estate, insurance, lending and fintech. Learn more
            about Sage Intacct,
          </p>
          <NavLink to="" className="slider-txt text-decoration-none">
            Financial Services industry
            <i className="fas fa-long-arrow-alt-right ms-1"></i>
          </NavLink>
        </div>
        <div className="mt-3">
          <img src={financialImg} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default Financial;