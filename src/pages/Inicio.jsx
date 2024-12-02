"use client"
import React, { useEffect } from "react";
import Etica from '../components/inicio/EticaProf';
import  NavBar  from '../components/NavBar';
import Banner from '../components/inicio/Banner';
import Conocenos from '../components/inicio/Conocenos';
import Tratamientos from '../components/inicio/Tratamientos';
import Footer from '../components/Footer';
import NavBarGlobal from "../components/NavBarGlobal";

export default function Inicio() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="App">
      <NavBarGlobal />
      <Banner />
      <Conocenos />
      <Etica />
      <Tratamientos />
      <Footer />
    </div>
  );
}
