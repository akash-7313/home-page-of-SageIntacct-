import React from 'react';
import { NavLink } from 'react-router-dom';
import hospitalityImg from "../../../images/needs/accounting-financial-management-for-hospitality.png";

const Hospitality = () => {
    return (
      <div>
        <div>
          <p className="fw-bold fs-5">Hospitality</p>
          <p>
            Best-in-class financial management for multi-property hotels,
            resorts, restaurants, entertainment venues, clubs, and all other
            hospitality industry businesses.
          </p>
          <NavLink to="/" className="slider-txt text-decoration-none">
            Hospitality industry
            <i className="fas fa-long-arrow-alt-right ms-1"></i>
          </NavLink>
        </div>
        <div className="mt-3">
          <img src={hospitalityImg} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default Hospitality;