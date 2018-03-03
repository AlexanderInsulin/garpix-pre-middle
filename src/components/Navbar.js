import React, { Component } from 'react';
import './Navbar.css';

import { Navbar as NavbarBootstrap, NavbarBrand } from 'reactstrap';
import AreYouShureModal from './AreYouShureModal';

class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: props.title,
      backURL: props.backURL,
      del: props.del,
      open: false,
      albumUuid: props.albumUuid,
      photoUuid: props.photoUuid
    }

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <NavbarBootstrap className="navbarCustom" dark sticky="top">
        <NavbarBrand href={this.state.backURL} className="customBrandStyle leftContent">
          <i className="material-icons navBackIcon">chevron_left</i>
        </NavbarBrand>
        <div className="leftBorder"></div>
        <div className="navCenter"> {this.state.title} </div>
        <NavbarBrand className="customBrandStyle rightContent">
          <i className="material-icons navRightIcons">create</i>
        </NavbarBrand>
        <NavbarBrand onClick={this.toggle} className="customBrandStyle rightContent">
          <i className="material-icons navRightIcons">delete</i>
        </NavbarBrand>
        <AreYouShureModal open={this.state.modalOpen} toggle={this.toggle} name={this.state.title} albumUuid={this.state.albumUuid} photoUuid={this.state.photoUuid} />
      </NavbarBootstrap>
    )
  }
}

export default Navbar;
