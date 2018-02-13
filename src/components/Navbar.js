import React from 'react';
import './Navbar.css';

import { Navbar as NavbarBootstrap, NavbarBrand } from 'reactstrap';

const Navbar = ({ title }) => (
  <NavbarBootstrap className="navbarCustom" dark sticky="top">
    <div className="rightBorder float-left"> <NavbarBrand href="/" > <i className="material-icons navIcone">chevron_left</i> </NavbarBrand> </div>
    <div className="navCenter"> {title} </div>
    <div> <NavbarBrand href="/" className="navEditter"> <i className="material-icons">create</i> </NavbarBrand> </div>
  </NavbarBootstrap>
);

export default Navbar;
