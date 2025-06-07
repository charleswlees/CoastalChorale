import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

import "../style/Navbar.scss";

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);
  //In order to collapse menu when tapping an element out of nav menu
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setExpanded(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navRef]);


  return (
    <Navbar
      ref={navRef}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      expand="lg"
      bg="primary"
      variant="light"
      className="custom-navbar"
    >
      <Container fluid className="position-relative h-100">
        <Navbar.Toggle
          onClick={() => setExpanded(!expanded)}
          aria-controls="responsive-navbar-nav"
        />

        <Navbar.Brand
          as={Link}
          to="/"
          className="position-absolute top-50 start-50 translate-middle centered-logo-link"
          onClick={() => setExpanded(false)} // Use the helper function
        >
          <img src={logo} alt="Logo" height="80" />
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="w-100 justify-content-center align-items-center">
            <div className="d-flex flex-column flex-lg-row">
              {/* Add the onClick handler to each link */}
              <Nav.Link as={Link} to="/about" onClick={() => setExpanded(false)}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={() => setExpanded(false)}>
                Contact
              </Nav.Link>
            </div>
            <div className="d-flex flex-column flex-lg-row">
              <Nav.Link
                as={Link}
                to="/recordings"
                onClick={() => setExpanded(false)}
              >
                Recordings
              </Nav.Link>
              <Nav.Link as={Link} to="/photos" onClick={() => setExpanded(false)}>
                Photos
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
