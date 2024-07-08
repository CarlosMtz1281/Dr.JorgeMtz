import React from 'react';

const Ubicacion = () => {
    return (
        <section id='ubicacion'>
            <div className='ubicacionGrid'>
                <div className='ubicacionTextBox'>
                    <div>
                        <h2>Nuestra Ubicacion</h2>
                        <p>Estamos ubicados en Valle Sol 122 consultorio 206, Edificio Legacy, colonia La Diana, San Pedro Garza García Nuevo León</p>
                    </div>
                </div>
                <div className='iframeMapDesktop' >
                    <iframe
                        title="Google Maps"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d983.8488126224944!2d-100.34909914670892!3d25.66175477541551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be07f4b8fdd7%3A0xf315d385d82b3095!2sTorre%20Legacy!5e0!3m2!1ses-419!2smx!4v1720295533122!5m2!1ses-419!2smx"
                        width="800"
                        height="500"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>


        </section>
    );
};

export default Ubicacion;