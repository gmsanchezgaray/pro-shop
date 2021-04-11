import React from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from "react-bootstrap";

const { Brand, Toggle, Collapse } = Navbar;
const { Link } = Nav;

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Brand >ProShop</Brand>
          </LinkContainer>
          <Toggle aria-controls="basic-navbar-nav" />
          <Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
                <Link><i className='fas fa-shopping-cart'>Cart</i></Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Link ><i className='fas fa-user'>Sign In</i></Link>
              </LinkContainer>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
