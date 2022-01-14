import React from 'react';
import { NavLink } from "react-router-dom";
import subscriptionImg from "../../../images/needs/accounting-financial-management-for-subscription-saas.png";

const Subscription = () => {
    return (
      <div>
        <div>
          <p className="fw-bold fs-5">Subscription and SaaS</p>
          <p>
            The #1 Subscription Billing & Financial Software for SaaS Companies.
          </p>
          <NavLink to="/" className="slider-txt text-decoration-none">
            Subscription and SaaS industry
            <i className="fas fa-long-arrow-alt-right ms-1"></i>
          </NavLink>
        </div>
        <div className="mt-3">
          <img src={subscriptionImg} className="img-fluid" alt="" />
        </div>
      </div>
    );
};

export default Subscription;