import React from 'react';
import { NavLink } from 'react-router-dom';
import constructionImg from '../../../images/needs/accounting-financial-management-for-construction-real-estate.png'

const Construction = () => {
    return (
      <div>
        <div>
          <p className='fw-bold fs-5'>Construction and Real Estate</p>
          <p>
            Sage Intacct Construction is a native cloud solution that enables
            proactive job cost management with critical financial and
            operational metrics that drive increased efficiency, reduced audit
            time, and improved
          </p>
          <NavLink
            to="/"
            className="slider-txt text-decoration-none"
          >
            Construction and Real Estate industry
            <i className="fas fa-long-arrow-alt-right ms-1"></i>
          </NavLink>
        </div>
        <div className='mt-3'>
          <img src={constructionImg} className='img-fluid' alt="" />
        </div>
      </div>
    );
};

export default Construction;