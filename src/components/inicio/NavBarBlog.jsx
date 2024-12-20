
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


import { Link } from "react-router-dom";

import logo from '../info/logo3.png'

import 'bootstrap/dist/css/bootstrap.min.css';


export const NavBarBlog = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(true);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };
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
                        <Nav.Link href="#Footer" className={activeLink === 'footer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tratamientos')}>Contactanos</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};