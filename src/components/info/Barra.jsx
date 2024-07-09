
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
                <img src={logo} alt="Logo" className="logo"/>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
              </Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">

                  <Nav.Link href="#FAQSection" className={activeLink === 'FAQSection' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('FAQSection')}>Preguntas</Nav.Link>
                  <Nav.Link href="#ubicacion" className={activeLink === 'tratamientos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ubicacion')}>Ubicacion</Nav.Link>
                  <Link to="/" className="infoLink">Inicio</Link>
                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>

      )
    }
