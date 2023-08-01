/* USE BOOTSTRAP CARROUSEL form portafolio */

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TarjetaBlog from "./MTarjetaBlog";

import data from './blogData'

export default function Blog(){

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      const CustomButtonGroup = ({ next, previous, ...rest }) => {
        return (
          <div className="customButtonGroup">
            <button className="customButton left" onClick={() => previous()} > &lt; </button>
            <button className="customButton right" onClick={() => next()} >&gt;</button>
          </div>
        );
      };

      const cardMap = data.map(info =>{
        return(
            <TarjetaBlog
                key={info.id}
                item ={info}

            />
        )
      })

    return(
        <div>
            <div>

            <div className="anchorTagProjects" id="projects">

            </div>
                <section >

                <div className="blogWrap">
                    <h1 className="bSectionTittle">Blog</h1>

                {/*  Centrar contenedor con padding
                */}
                    <div className="carouselContainer">
                        <Carousel
                        responsive={responsive}
                        infinite={true}
                        controls={false}
                        customButtonGroup={<CustomButtonGroup />}
                        renderButtonGroupOutside= {true}
                        >
                            {cardMap}
                        </Carousel>

                    </div>

                </div>

                </section>

            </div>


        </div>
    )
}