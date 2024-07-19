
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


import { Link } from "react-router-dom";

import logo from '../assets/logo3.png';

import 'bootstrap/dist/css/bootstrap.min.css';


export const  NavBar=()=>{
      const [activeLink, setActiveLink] = useState('home');
      const [scrolled, setScrolled] = useState(false);

      useEffect(() => {
        const onScroll = () => {
          if (window.scrollY > 50) {
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
      }, [])

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
                  <Nav.Link href="#Conocenos" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Conócenos</Nav.Link>
                  <Nav.Link href="#NuestrosValores" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}> Nuestros Valores</Nav.Link>
                  <Nav.Link href="#Tratamientos" className={activeLink === 'tratamientos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tratamientos')}>Tratamientos</Nav.Link>
                  <Link to="/Informacion/#inicio" className="infoLink" >Información</Link>
                  <Nav.Link href="#Footer" className={activeLink === 'footer' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tratamientos')}>Contactanos</Nav.Link>

                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>

      )
    }
