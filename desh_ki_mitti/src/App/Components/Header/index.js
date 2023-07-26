import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import akamLogo from "./../../Assets/img/HeaderLogos/akamLogo.svg";
import "./header.scss";

function index() {
  return (
    <Navbar collapseOnSelect style={{ backgroundColor: "none" }}>
      <Container>
        <Navbar.Brand href="#home">#DeshKiMitti</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <img className="logo" src={akamLogo} alt="AKAM" />
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/explore">Explore</Nav.Link>
            <Nav.Link href="/add-bravehearts">Add Bravehearts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default index;
