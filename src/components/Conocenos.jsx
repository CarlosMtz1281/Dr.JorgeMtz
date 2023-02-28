
import img1 from "../assets/fotos consultorio_/foto6.jpg"
import img2 from "../assets/fotos consultorio_/foto10.jpg"
import img3 from "../assets/fotos consultorio_/foto4.jpg"

export default function Conocenos(){
    return(
        <div>
        <section className="conocenosSection" >
            <div className="conocenosSpacer"></div>
            <h1 className= "tituloSection">Conócenos</h1>
         </section>

         <div className="row mb-4">
            <div className="col-md-4">
                <a href="javascript:void(0)" className="overlay-img">
                    <img src={img1} alt="Error"/>
                    <div className="overlay"></div>
                    <div className="des">
                        <h1 className="title">Filosofia</h1>

                        <p className ="subtitleSection">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="javascript:void(0)" className="overlay-img">
                    <img src={img2}  alt="Error"/>
                    <div className="overlay"></div>
                    <div className="des">
                        <h1 className="title">Diagnostico y tratamiento </h1>

                        <p className ="subtitleSection">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4" >
                <a href="javascript:void(0)" className="overlay-img">
                    <img src={img3}  alt="Error"/>
                    <div className="overlay"></div>
                    <div className="des">
                        <h1 className="title">Atencion Personal</h1>

                        <p className ="subtitleSection">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </a>
            </div>
        </div>
</div>

    )
}