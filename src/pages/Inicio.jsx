import React, { useEffect } from "react";
import Etica from '../components/inicio/EticaProf';
import { NavBar } from '../Components/NavBar';
import Banner from '../components/inicio/Banner';
import Conocenos from '../components/inicio/Conocenos';
import Tratamientos from '../components/inicio/Tratamientos';
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
