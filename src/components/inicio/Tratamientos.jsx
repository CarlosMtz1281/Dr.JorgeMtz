
import img1 from '../../assets/fotosConsultorio/foto11.jpg'
import img2 from '../../assets/FotosTratamientos/implantes.jpg'
import img3 from '../../assets/FotosTratamientos/fotoPerfil.jpeg'
import img4 from '../../assets/FotosTratamientos/tercerosMolares.jpeg'
import img5 from '../../assets/FotosTratamientos/laser.jpeg'
import img6 from '../../assets/FotosTratamientos/bucal.jpeg'

export default function Tratamientos(){
    return(
        <div className='tratamientosSection'>
            <div id='tratamientos'></div>
            <div className='tratamientosSpacer'></div>

            <h1 className="trataminetosTitulo" >Tratamientos</h1>

        <div className="lineasTratamientos">

            {/* Empieza la tabla de tratamientos*/ }

            <div className="tablaTratamientos"  >
                    <div className="cajaTratamientosImg" style={{backgroundImage: `url(${img1})`}}>
                        <img src={img4} alt="Error" className='fotoTratamientos' />
                    </div>
                    <div className="cajaTratamientos">
                        <div className="textoTratamientos_p">
                            <h2 className="tituloFranja">Terceros Molares</h2>
                            <p className="textoFranja"> Los terceros molares (muelas del juicio o cordales), son los últimos dientes en erupcionar, razón por la que frecuentemente presntan algunas afectaciones para la salud. Si bien no siempre tienen que retirarse, es recomendable (de los 15 años en adelante)acudir a una consulta con su especialista para determinar la mejor conducta en cada caso. Cuando se determina que si deben retirarse, ésto se lleva a cabo de manera ambulatoria, y con un mínimo de molestias para el paciente.</p>
                    </div>
                </div>
            </div>


            <div className="tablaTratamientos"  >
                    <div className="cajaTratamientos">
                        <div className="textoTratamientos_p">
                            <h2 className="tituloFranja">Cirugía Facial</h2>
                            <p className="textoFranja"> La cirugía ortognática es un procedimiento mediante el cual pueden corregirse un sin número de alteraciones del crecimiento facial, tales como prognatismo (mandíbula prominente), retrognacia (mandíbula muy pequeña), sonrisa gingival (crecimiento vertical maxilar), y microgenia (mentón pequeño), por mencionar solo algunas. Este tipo de tratamientos se lleva a cabo en hospital, y en la mayoría de los casos, una noche de estancia es suficiente para continuar la recuperación en casa.</p>
                        </div>

                </div>
                    <div className="cajaTratamientosImg" style={{backgroundImage: `url(${img1})`}}>
                            <img src={img3} alt="Error" className='fotoTratamientos' />
                    </div>
            </div>

            <div className="tablaTratamientos"  >
                    <div className="cajaTratamientosImg" style={{backgroundImage: `url(${img1})`}}>
                        <img src={img2} alt="Error" className='fotoTratamientos' />
                    </div>
                    <div className="cajaTratamientos">
                        <div className="textoTratamientos_p">
                            <h2 className="tituloFranja">Implantes Dentales</h2>
                            <p className="textoFranja"> Siempre debe hacerse todo lo posible por conservar los dientes naturales…, sin embargo, cuando éstos se pierden, la mejor alternativa de reemplazo, son los implantes dentales. Este tipo de tratamientos los llevamos a cabo en el consultorio, con un mínimo de molestias, y hacen posible restablecer la estética y la función masticatoria de manera ideal, una vez que se concluye el proceso.</p>
                    </div>
                </div>
            </div>

            <div className="tablaTratamientos"  >
                    <div className="cajaTratamientos">
                        <div className="textoTratamientos_p">
                            <h2 className="tituloFranja">Cirugía con Laser</h2>
                            <p className="textoFranja">En ocasiones se desarrollan alteraciones o pequeños crecimientos en los tejidos blandos de la cavidad oral (pequeños quistes, lesiones, frenillos cortos, etc.). En la mayoría de estos casos,  podemos hacer el tratamiento con laser, reduciendo con ello las molestias postoperatorias, sangrado, inflamación, e incluso en muchos de los casos, eliminando la necesidad de hacer puntos de sutura.</p>
                        </div>

                </div>
                    <div className="cajaTratamientosImg" style={{backgroundImage: `url(${img1})`}}>
                            <img src={img5} alt="Error" className='fotoTratamientos' />
                    </div>
            </div>

            <div className="tablaTratamientos"  >
                    <div className="cajaTratamientosImg" style={{backgroundImage: `url(${img1})`}}>
                        <img src={img6} alt="Error" className='fotoTratamientos' />
                    </div>
                    <div className="cajaTratamientos">
                        <div className="textoTratamientos_p">
                            <h2 className="tituloFranja">Cirugia Bucal</h2>
                            <p className="textoFranja"> Existen múltiples procedimientos de cirugía bucal que podemos llevar a cabo en el consultorio, como por ejemplo: extracciones dentales, toma de biopsias, colocación de injertos, corrección estética de la encía, etc. Todos ellos, se llevan a cabo de forma ambularotia y con un mínimo de molestias para el paciente.</p>
                    </div>
                </div>
            </div>





        </div>

        </div>

    )
}