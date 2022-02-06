import React from 'react';
import { NavLink } from 'react-router-dom';
import healthcareImg from "../../../images/needs/accounting-financial-management-for-healthcare.png";

const Healthcare = () => {
    return (
      <div className="text-start">
        <div>
          <p className="fw-bold fs-5">Healthcare</p>
          <p>
            Sage Intacct is the choice of growing, data driven healthcare
            organizations. Our cloud-based accounting solution is the only
            accounting software endorsed by the AICPA and designated as Peer
          </p>
          <NavLink to="" className="slider-txt text-decoration-none">
            Healthcare industry
            <i className="fas fa-long-arrow-alt-right ms-1"></i>
          </NavLink>
        </div>
        <div className="mt-3">
          <img src={healthcareImg} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default Healthcare;