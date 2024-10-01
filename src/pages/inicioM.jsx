"use client"

import React, { useEffect } from "react";
import Etica from '../components/inicio/EticaProfM';
import  NavBar  from "../components/NavBar";
import Banner from '../components/inicio/Banner';
import Conocenos from '../components/inicio/Conocenos';
import Tratamientos from '../components/inicio/TratamientosM';
import Footer from '../components/Footer';


export default function Inicio() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Conocenos />
      <Etica />
      <Tratamientos />
      <Footer />
    </div>
  );
}
