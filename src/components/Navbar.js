import React from 'react';
import './Navbar.css';

import { Navbar as NavbarBootstrap, NavbarBrand } from 'reactstrap';

const Navbar = ({ title }) => (
  <NavbarBootstrap className="navbarCustom" dark sticky="top">

      <NavbarBrand href="/" className="customBrandStyle leftContent">
        <i className="material-icons navBackIcon">chevron_left</i>
      </NavbarBrand>

  <div className="leftBorder"></div>
  <div className="navCenter"> {title} </div>
    <NavbarBrand href="/" className="customBrandStyle navRightIcons">
       <i className="material-icons ">create</i>
    </NavbarBrand>
    <NavbarBrand href="/" className="customBrandStyle navRightIcons">
       <i className="material-icons ">delete</i>
    </NavbarBrand>
  </NavbarBootstrap>
);

export default Navbar;
