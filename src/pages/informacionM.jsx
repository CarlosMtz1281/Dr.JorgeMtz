"use client"

import React from "react";
import { useEffect } from "react";

import  NavBar  from "../components/NavBar";
import Banner from "../components/info/BannerInfo";
import FAQ from "../components/info/FAQ";
import Footer from "../components/Footer";
import Ubicacion from "../components/info/UbicacionM";
import Blog from "../components/info/MBlog";
import { Nav } from "react-bootstrap";


export default function InformacionM(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <NavBar/>
            <Banner/>
            <FAQ/>
            <Ubicacion/>
            <Footer/>
        </div>
    )
}