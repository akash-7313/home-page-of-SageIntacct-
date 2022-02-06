import React from 'react';
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import './SolutionNav.css';
import Industry from '../Industry/Industry';
import Wholesale from "../Wholesale/Wholesale";
import Subscription from "../Subscription/Subscription";
import Professional from "../Professional/Professional";
import Nonprofits from "../Nonprofits/Nonprofits";
import Hospitality from "../Hospitality/Hospitality";
import Healthcare from "../Healthcare/Healthcare";
import Financial from "../Financial/Financial";
import Construction from "../Construction/Construction";

const SolutionNav = () => {
    return (
      <div className="container">
        <p className="fs-2 mb-5">
          Solutions for your 
          <span className="fw-bold"> industry’s <br /> specific needs
          </span>
        </p>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="text-start">
              <nav>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to="industry"
                  className="nested-link"
                >
                  <i className="far fa-lightbulb text-muted"></i> For Any
                  Industry
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to="construction"
                  className="nested-link"
                >
                  <i className="fas fa-toolbox text-muted"></i> Construction and
                  Real Estate
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to="financial"
                  className="nested-link"
                >
                  <i className="fas fa-university text-muted"></i> Financial
                  Services
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to="healthcare"
                  className="nested-link"
                >
                  <i className="fas fa-first-aid text-muted"></i> Healthcare
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to="hospitality"
                  className="nested-link"
                >
                  <i className="fas fa-hamburger text-muted"></i> Hospitality
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to="nonprofits"
                  className="nested-link"
                >
                  <i className="fas fa-hand-holding-heart text-muted"></i>{" "}
                  Nonprofits
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to="professional"
                  className="nested-link"
                >
                  <i className="fas fa-briefcase text-muted"></i> Professional
                  Services
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to="subscription"
                  className="nested-link"
                >
                  <i className="fas fa-coffee text-muted"></i> Subscription and
                  SaaS
                </NavLink>
                <NavLink
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "blue" : "",
                    };
                  }}
                  to="wholesale"
                  className="nested-link"
                >
                  <i className="fas fa-balance-scale text-muted"></i> Wholesale
                  Distribution
                </NavLink>
              </nav>
              <Outlet />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <div className="nested-routes">
              <Routes>
                <Route path="/" element={<Industry />} />
                <Route path="industry" element={<Industry />} />
                <Route path="construction" element={<Construction />} />
                <Route path="financial" element={<Financial />} />
                <Route path="healthcare" element={<Healthcare />} />
                <Route path="hospitality" element={<Hospitality />} />
                <Route path="nonprofits" element={<Nonprofits />} />
                <Route path="professional" element={<Professional />} />
                <Route path="subscription" element={<Subscription />} />
                <Route path="wholesale" element={<Wholesale />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SolutionNav;
