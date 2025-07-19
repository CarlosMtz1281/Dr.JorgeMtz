export default function Banner() {
  return (
    <div>
      <header className="bannerWrap">
        <div className="bannerBox">
          <div className="overlay">
            <div className="textoBanner">
              {/*agregar spacer */}
              <h1 className="tittle">Dr. Jorge Martínez</h1>

              <p className="subtitle">Cirugía Maxilofacial</p>
            </div>
            <div className="contactanosWrp">
              <div className="contactanosBtn">
                <a
                    href="https://api.whatsapp.com/send?phone=8180101884&text=Hola%20buen%20dia,%20me%20gustaria%20agendar%20una%20cita%20con%20el%20Dr.%20Jorge%20Mtz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btnContactanos"
                    >
                    Contáctanos
                    </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bannerSpacer"></div>
      </header>
    </div>
  );
}
