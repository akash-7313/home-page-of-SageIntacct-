import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import './SolutionNav.css';

const SolutionNav = () => {
    return (
      <div className="container">
        <p className="fs-2 text-center mb-4">
          Solutions for your
          <span className="fw-bold">
            industry’s <br /> specific needs
          </span>
        </p>
        <div className="col-lg-6">
          <div className="text-start">
            <nav>
              <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "blue" : ""
              };
            }} to="/industry" className="dashboard-link">
                <i className="far fa-lightbulb text-muted"></i> For Any Industry
              </NavLink>
              <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "blue" : ""
              };
            }} to="/construction" className="dashboard-link">
                <i className="fas fa-toolbox text-muted"></i> Construction and Real
                Estate
              </NavLink>
              <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "blue" : ""
              };
            }} to="/financial" className="dashboard-link">
                <i className="fas fa-university text-muted"></i> Financial Services
              </NavLink>
              <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "blue" : ""
              };
            }} to="/healthcare" className="dashboard-link">
                <i className="fas fa-first-aid text-muted"></i> Healthcare
              </NavLink>
              <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "blue" : ""
              };
            }} to="/hospitality" className="dashboard-link">
                <i className="fas fa-hamburger text-muted"></i> Hospitality
              </NavLink>
              <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "blue" : ""
              };
            }} to="/nonprofits" className="dashboard-link">
                <i className="fas fa-hand-holding-heart text-muted"></i> Nonprofits
              </NavLink>
              <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "blue" : ""
              };
            }} to="/professional" className="dashboard-link">
                <i className="fas fa-briefcase text-muted"></i> Professional
                Services
              </NavLink>
              <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "blue" : ""
              };
            }} to="/subscription" className="dashboard-link">
                <i className="fas fa-coffee text-muted"></i> Subscription and SaaS
              </NavLink>
              <NavLink style={({ isActive }) => {
              return {
                color: isActive ? "blue" : ""
              };
            }} to="/wholesale" className="dashboard-link">
                <i className="fas fa-balance-scale text-muted"></i> Wholesale
                Distribution
              </NavLink>
            </nav>
            <Outlet />
          </div>
        </div>
        <div className="col-lg-6"></div>
      </div>
    );
};

export default SolutionNav;
