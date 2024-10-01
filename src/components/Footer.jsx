
export default function Footer() {


  return (
    <section className="pieDePagina" id="Footer">
      <h1 className="tituloFotter">Contactanos</h1>
        <div className="footerTxtWrap">
            <p className="textoFooter"><strong>Teléfono: </strong> 8112315980</p>
            <p className="textoFooter"> <strong>WhatsApp: </strong>8180101884</p>
            <p className="textoFooter"><strong>Email: </strong> drjorgemtz.c@gmail.com </p>
            <p className="textoFooter"><strong>Dirección:</strong>  Valle Sol 122 consultorio 206, Edificio Legacy, <br/> Colonia La Diana, CP 66266, San Pedro Garza García, Nuevo León </p>

        </div>

      <div id="lista">
        <ul className="social-buttons">
          <li>
            <a href="tel:+8112315980" className="social-btn">
              <i className="fa fa-phone"></i>
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/8180101884"
              className="social-btn"
              target="_blank"
            >
              <i className="fa fa-whatsapp"></i>
            </a>
          </li>
          <li>
            <a
              href="https://maps.app.goo.gl/bsG9fKnkcLMor3FT9"
              className="social-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-location-arrow"></i>
            </a>
          </li>
          <li>
            <a href="mailto:drjorgemtz.c@gmail.com" className="social-btn">
              <i className="fa fa-envelope"></i>
            </a>
          </li>
        </ul>
      </div>

      <p className="firma">
        Copyright &copy; {new Date().getFullYear()}, Dr. Jorge Martínez
      </p>
      <p className="copyright">Desarollado por Carlos Martinez</p>

    </section>
  );
}
