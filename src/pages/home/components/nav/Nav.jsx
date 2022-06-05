import React from "react";
import { Navbar, Nav, NavLink, NavbarBrand, NavDropdown } from "react-bootstrap";
import "./nav.css";
import IMG from "../../assets/logo/brand.png";

const BsNav = () => {
  return (
    <Navbar className="nav-color" variant="light" sticky="top" collapseOnSelect expand="lg">
      <NavbarBrand href="/#">
        <img src={IMG} alt="brand logo" className="img-nav" />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav activeKey="/#" className="justify-content-end">
          <NavLink href="/#">Home</NavLink>
          <NavDropdown title="Cluster" id="navbarScrollingDropdown">
            <NavDropdown.Item href="/property">Anggrek Residence</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/property">Senopati Residence</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/property">Coming soon</NavDropdown.Item>
          </NavDropdown>
          <NavLink href="#about">About</NavLink>

          <NavLink href="#produk">Produk</NavLink>
          <NavLink href="#why">Keunggulan</NavLink>
          <NavLink href="#contact">Kontak</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default BsNav;
