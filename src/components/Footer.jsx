
import '../assets/font-awesome/css/font-awesome.min.css'

export default function Footer(){
    return(
        <section className= "pieDePagina">
    <h1 className="tituloFotter">Contactanos</h1>



            <div id="lista">
                <ul className="social-buttons">
                  <li><a href="index.html#" className="social-btn"><i className="fa fa-phone"></i></a></li>
                  <li><a href="index.html#" className="social-btn"><i className="fa fa-whatsapp"></i></a></li>
                  <li><a href="index.html#" className="social-btn"><i className="fa fa-location-arrow"></i></a></li>
          <li><a href="index.html#" className="social-btn"><i className="fa fa-envelope"></i></a></li>

                </ul>
              </div>

    <p className="firma">Desarollado por Carlos Martinez</p>
    <p className="copyright"><small> Copyright &copy; 2023, Dr. Jorge Martínez</small></p>
</section>

    )
}