import React, { useEffect } from "react";
import Etica from '../components/EticaProf';
import { NavBar } from '../Components/NavBar';
import Banner from '../components/Banner';
import Conocenos from '../components/Conocenos';
import Tratamientos from '../components/Tratamientos';
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
