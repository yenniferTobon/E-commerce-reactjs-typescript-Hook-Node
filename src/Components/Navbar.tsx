import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, NavLink } from "react-router-dom";
import { Home } from './Home';
import OrderListTable from './OrderListTable';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <a className="navbar-brand">
            <img src="./../logo.png" width="35" height="35" alt="" />
          </a>
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="btn btn-dark mr-2" to="/">Home</Link>
            <NavLink className="btn btn-dark mr-2" to="/orderList">Orders</NavLink>
          </ul>
          <form className="d-flex">
            <NavLink className="btn btn-dark mr-2" to="/login">Login</NavLink>
            <input className="form-control me-2" type="search" placeholder="Search"></input>
            <NavLink className="btn btn-outline-warning" to="/Search" type="submit">Search</NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
