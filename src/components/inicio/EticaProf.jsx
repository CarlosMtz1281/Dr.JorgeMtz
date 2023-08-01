
import img1 from "../../assets/fotosConsultorio/foto6.jpg"
import img2 from "../../assets/fotosConsultorio/foto10.jpg"
import img3 from "../../assets/fotosConsultorio/foto4.jpg"

export default function Conocenos(){
    return(
        <div>
            <section className="conocenosSection">
            <div className="valoresID" id="conocenos"></div>



                <div className="conocenosSpacer">
                    <h1 className= "tituloSection">Valores</h1>
                </div>
            </section>

         <div className="row mb-4">
            <div className="col-md-4">
                <a href="javascript:void(0)" className="overlay-img">
                    <img src={img1} alt="Error"/>
                    <div className="overlay"></div>
                    <div className="des">
                        <h1 className="title">Ética y Profesionalismo</h1>

                        <p className ="subtitleSection">Nuestro compromiso es buscar la mejor solución a los problemas de salud que aquejan a nuestros pacientes, anteponiendo siempre el bienestar de la persona, siendo congruentes con nuestro código de ética y profesionalismo.</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4">
                <a href="javascript:void(0)" className="overlay-img">
                    <img src={img2}  alt="Error"/>
                    <div className="overlay"></div>
                    <div className="des">
                        <h1 className="title">Diagnóstico y tratamiento </h1>

                        <p className ="subtitleSection">Más de 25 años de experiencia clínica y académica, aunado al equipamiento más avanzado (como imagenología 3D), nos permiten no solamente llegar a un diagnóstico preciso, sino proponer las mejores opciones de tratamiento.</p>
                    </div>
                </a>
            </div>
            <div className="col-md-4" >
                <a href="javascript:void(0)" className="overlay-img">
                    <img src={img3}  alt="Error"/>
                    <div className="overlay"></div>
                    <div className="des">
                        <h1 className="title">Atención Personal</h1>

                        <p className ="subtitleSection">Estamos convencidos de que la atención en cirugía maxilofacial e implantología oral, no es algo que se pueda delegar a cualquier persona…; es por eso que, en el 100% de los casos, tanto la consulta, como el tratamiento y acompañamiento postoperatorio, se encuentra a cargo del Dr. Jorge Martínez</p>
                    </div>
                </a>
            </div>
        </div>
</div>

    )
}