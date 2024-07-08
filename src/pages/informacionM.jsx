
import React from "react";
import { useEffect } from "react";

import { Barra } from "../components/info/Barra";
import Banner from "../components/inicio/Banner";
import FAQ from "../components/info/FAQ";
import Footer from "../components/Footer";
import Ubicacion from "../components/info/UbicacionM";


export default function InformacionM(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <Barra/>
            <Banner/>
            <FAQ/>
            <Ubicacion/>
            <Footer/>
        </div>
    )
}