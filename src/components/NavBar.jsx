
import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router} from "react-router-dom";

import logo from '../assets/logo2.png';

import 'bootstrap/dist/css/bootstrap.min.css';


export const  NavBar=()=>{



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
        <Router>
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
                  <Nav.Link  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} id="myBtn" title="Go to top">Conocenos</Nav.Link>
                  <Nav.Link href="#etica" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Etica</Nav.Link>
                  <Nav.Link href="#tratamientos" className={activeLink === 'tratamientos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('tratamientos')}>Tratamientos</Nav.Link>
                  <Nav.Link href="#informacion" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Informacion</Nav.Link>

                </Nav>

              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Router>
      )
    }
