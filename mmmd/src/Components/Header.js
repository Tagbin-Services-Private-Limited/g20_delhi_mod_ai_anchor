import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="">
      <Container>
        <Navbar.Brand href="/">
            <img src='./asset/images/logos/youth.svg' alt='youth' height={30} />
        </Navbar.Brand>
        <Navbar.Brand href="/">
            <img src='./asset/images/logos/akam.svg' alt='akam' height={30} />
        </Navbar.Brand>
        <Navbar.Brand href="/">
            <img src='./asset/images/logos/yuva.svg' alt='yuva' height={30} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        </Nav>
          <Nav>
            <Nav.Link href="/about" className='header_text'>About</Nav.Link>
            <Nav.Link href="/explore" className='header_text'>
              Explore
            </Nav.Link>
            <Nav.Link href="/braveheart" className='header_text'>
              Bravehearts
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;