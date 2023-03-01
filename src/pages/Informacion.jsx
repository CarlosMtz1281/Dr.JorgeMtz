
import React from "react";

import { Barra } from "../components/info/Barra";
import Banner from "../components/Banner";
import FAQ from "../components/info/FAQ";
import Blog from "../components/info/Blog";
import Footer from "../components/Footer";


export default function Informacion(){
    return (
        <div>
            <Barra/>
            <Banner/>
            <FAQ/>
            <Blog/>
            <Footer/>
        </div>
    )
}