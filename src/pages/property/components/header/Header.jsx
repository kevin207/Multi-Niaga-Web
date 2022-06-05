import React from "react";
import { Navbar, Nav, NavLink, NavbarBrand, NavDropdown } from "react-bootstrap";
import IMG from "../../../home/assets/logo/brand.png";
import "./header.css";

const Header = () => {
  return (
    <Navbar className="nav-color" variant="light" sticky="top" collapseOnSelect expand="lg">
      <NavbarBrand href="/Multi-Niaga-Web">
        <img src={IMG} alt="brand logo" className="img-nav" />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey="/home" className="justify-content-end">
          <NavLink href="/Multi-Niaga-Web">Home</NavLink>
          <NavDropdown title="Lokasi" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action1">Rajabasa</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action2">Korpri</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
