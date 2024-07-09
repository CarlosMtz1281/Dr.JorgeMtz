
import './App.css'

import Inicio from './pages/inicio';
import Informacion from './pages/Informacion';


import InicioM from './pages/inicioM';
import InformacionM from './pages/InformacionM';

import { Routes,Route } from 'react-router-dom';

function App() {
  {/*FUNCIONES Y OPTIMICACION MOVIL ESCRITORIUO */}
  const getWindowDimension = () => {
    const width = window.innerWidth
              || document.documentElement.clientWidth
              || document.body.clientWidth;
    const height = window.innerHeight
              || document.documentElement.clientHeight
              || document.body.clientHeight;
    console.log(width,height)

    if (width < 450 ){
      return mobileV()
    }else{
      return desktopV()
    }
    };

  const mobileV = () => {
    return (
      <Routes>
        <Route path= "/" element={<InicioM/>}/>
        <Route path= "/Informacion" element={<InformacionM/>}/>
    </Routes>
    )
  }

  const desktopV = () => {
    return (

        <Routes>
          <Route path= "/" element={<Inicio/>}/>
          <Route path= "/Informacion" element={<Informacion/>}/>
        </Routes>

    )
  }

  return (
    <div className="App">
       {getWindowDimension()}
    </div>
  )
}

export default App
