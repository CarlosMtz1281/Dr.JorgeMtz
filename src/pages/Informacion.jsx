"use client"

import React from "react";
import { useEffect } from "react";

import { Barra } from "../components/info/Barra";
import Banner from "../components/info/BannerInfo";
import FAQ from "../components/info/FAQ";
import Footer from "../components/Footer";
import Ubicacion from "../components/info/Ubicacion";
import Blog from "../components/info/MBlog";
import NavBarGlobal from "../components/NavBarGlobal";


export default function Informacion(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <NavBarGlobal/>
            <Banner/>
            <FAQ/>
            <Ubicacion/>
            <Footer/>
        </div>
    )
}