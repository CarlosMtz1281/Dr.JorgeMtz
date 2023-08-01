import React from 'react';
import img from '../../assets/fotosConsultorio/foto15.jpg';

export default function Etica(){
    return(
        <div>

        <div className="eticaSection">

        <div className="tratamientosSpacer" id="etica"></div>
        <div className="tratamientosSpacer" ></div>
        <h1 className="iconsectionTitle" >Conócenos</h1>

        <div className="services">
           <div className="pruebaRow">

                         <div className="caja item">
                           <div className="icon">
                             <i className="fa fa-graduation-cap"></i>

                           </div>
                           <h2 className="iconTitle">Preparacion Academica</h2>
                           <p className="iconText">El Dr. Jorge Martínez recibe su título de Cirujano Dentista por la UANL, como primer lugar de su generación, más tarde lleva a cabo su entrenamiento en Cirugía Maxilofacial, en el Hospital López Mateos, en la ciudad de México, completando la última parte en el Hospital Universitario de Basilea, Suiza. Finalmente realiza estudios de especialización en Cirugía Ortognática y Reconstructiva en "University of Nort Carolina" en Estados Unidos</p>
                         </div>

                         <div className="caja item">
                           <div className="fotoconocWrap">
                           <img className='fotoConocenos' src= {img}/>
                           {/*<i className="fa fa-cubes"></i>*/}

                           </div>
                           <h2 className="iconTitle">Trayectoria Profesional</h2>
                           <p className="iconText">El Dr. Jorge Martínez inicia su actividad clínica en 1998, al mismo tiempo que comienza como profesor de cirugía y posteriormente como subdirector de odontología en la UANL. Posteriormente es invitado por el Tec de Monterrey, para iniciar la carrera de Médico cirujano odontólogo en el 2008, donde funge como Director del Departamento de Odontología. Actualmente se encuentra a cargo de la Dirección de la División Ciencias de la Salud, de la Escuela de Medicina y Ciencias de la Salud, del Tec de Monterrey.
</p>
                         </div>

                         <div className="caja item">
                           <div className="icon">
                             <i className="fa fa-trophy"></i>
                           </div>
                           <h2 className="iconTitle">Reconocimientos</h2>
                           <p className="iconText">En 1992 recibe el "Premio al mérito académico" por haber obtenido el primer lugar de su generación en la UANL. En 1997 recibe la beca "AO-ASIF" para hacer un fellowship en el Hospital Universitario de Basilea, Suiza. En 1999 recibe su certificación por parte del Consejo Mexicano de Cirugía Oral y Maxilofacial. Se convierte en miembro de la Asociación Americana de Cirugía Oral y Maxilofacial, y Fellow del "International team for Implantology". En 2009 la editorial Manual Moderno, publica su libro "Cirugía Oral y Maxilofacial". En el 2015 recibe el "Premio a la Excelencia en el desarrollo profesional" por parte de la UANL</p>
                         </div>
       </div>
       </div>

        </div>
        </div>

    )
}