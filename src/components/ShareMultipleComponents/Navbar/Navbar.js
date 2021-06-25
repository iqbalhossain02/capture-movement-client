import React, { useEffect } from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Navbars = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
    return (
        <Navbar data-aos="fade-down" bg="light" expand="lg">
  <Navbar.Brand as={Link} to="/home"><img style={{ width : "100px", height : "40px"}} src="https://www.capturethemoment4.me/wp-content/uploads/2017/10/Framed-Capture-the-Moment-Logo.png" alt=""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto mr-3 font-weight-bold">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/service">Services</Nav.Link>
      <Nav.Link as={Link} to="/review">Review</Nav.Link>
      <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
      <Nav.Link as={Link} to="/contract">Contract</Nav.Link>
      <Button as={Link} to="/login" variant="outline-success btn-sm">Log In</Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
};

export default Navbars;