import React from 'react';
import { NavLink } from 'react-router-dom';
import nonprofitsImg from "../../../images/needs/accounting-financial-management-for-non-profits.png";

const Nonprofits = () => {
    return (
      <div className="text-start">
        <div>
          <p className="fw-bold fs-5">Nonprofits</p>
          <p>Sage Intacct Helping Nonprofits Achieve Greater Impact.</p>
          <NavLink to="" className="slider-txt text-decoration-none">
            Nonprofits industry
            <i className="fas fa-long-arrow-alt-right ms-1"></i>
          </NavLink>
        </div>
        <div className="mt-3">
          <img src={nonprofitsImg} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default Nonprofits;