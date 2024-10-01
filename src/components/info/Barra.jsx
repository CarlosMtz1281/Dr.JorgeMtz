
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


import { Link } from "react-router-dom";

import logo from '../info/logo3.png'

import 'bootstrap/dist/css/bootstrap.min.css';


export const  Barra=()=>{



      const handleClick = () => {
        window.open("https://www.linkedin.com/in/carlosmartinezrdz/");
      };

      const [activeLink, setActiveLink] = useState('home');
      const [scrolled, setScrolled] = useState(true);



      const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }

      return (

          <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
            <Container>
            <Navbar.Brand href="/">
                <div className="navbarLogoWrp">
                  <img src={logo} alt="Logo" className="logo"/>
                  <div className="navbarLogoSeparator">
                    <p>|</p>
                  </div>
                  <div className="navbarLogoTxtWrp">
                    <h4>Dr. Jorge <br/> Martínez</h4>
                  </div>
                </div>

              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">

                  <Nav.Link href="#FAQSection" className={activeLink === 'FAQSection' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('FAQSection')}>Preguntas</Nav.Link>
                  <Nav.Link href="#ubicacion" className={activeLink === 'tratamientos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ubicacion')}>Ubicacion</Nav.Link>
                  <Nav.Link href="#ubicacion" className={activeLink === 'tratamientos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ubicacion')}>Blogs</Nav.Link>
                  <Link to="/" className="infoLink">Inicio</Link>
                  <Link to="/Blog" className="infoLink">Blogs</Link>

                  <Nav.Link href="#Footer" className={activeLink === 'footer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tratamientos')}>Contactanos</Nav.Link>

                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>

      )
    }
