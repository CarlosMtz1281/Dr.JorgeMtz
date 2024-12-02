import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from '../assets/logo3.png';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBarGlobal() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActiveLink = (path) => {
    return location.pathname === path ? "nav-link navbar-link active" : "nav-link navbar-link";
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <div className="navbarLogoWrp">
            <img src={logo} alt="Logo" className="logo" />
            <div className="navbarLogoSeparator">
              <p>|</p>
            </div>
            <div className="navbarLogoTxtWrp">
              <h4>Dr. Jorge <br /> Martínez</h4>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link to="/" className={isActiveLink("/")}>Inicio</Link>
            <Link to="/Informacion" className={isActiveLink("/Informacion")}>Información</Link>
            <Link to="/Blog" className={isActiveLink("/Blog")}>Blogs</Link>
            <Nav.Link
              href="#Footer"
              className="nav-link navbar-link"
            >
              Contáctanos
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}