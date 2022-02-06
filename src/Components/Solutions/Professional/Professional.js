import React from 'react';
import { NavLink } from "react-router-dom";
import professionalImg from "../../../images/needs/accounting-financial-management-for-professional-services.png";

const Professional = () => {
    return (
      <div className="text-start">
        <div>
          <p className="fw-bold fs-5">Professional Services</p>
          <p>
            Don't manage projects using the rear-view mirror. Sage Intacct
            delivers operational and financial visibility for your entire
            business—not just finance— for improved automation, profitability
            and customer
          </p>
          <NavLink to="" className="slider-txt text-decoration-none">
            Professional Services industry
            <i className="fas fa-long-arrow-alt-right ms-1"></i>
          </NavLink>
        </div>
        <div className="mt-3">
          <img src={professionalImg} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default Professional;