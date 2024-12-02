"use client"

import React from "react";
import { useEffect } from "react";

import { NavBarBlog } from "../components/inicio/NavBarBlog";
import Banner from "../components/info/BannerInfo";
import FAQ from "../components/info/FAQ";
import Footer from "../components/Footer";
import Ubicacion from "../components/info/UbicacionM";
import Blog from "../components/info/MBlog";
import NavBarGlobal from "../components/NavBarGlobal";


export default function Blogs(){
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <NavBarGlobal/>
            <Banner/>
            <Blog/>
            <Footer/>
        </div>
    )
}