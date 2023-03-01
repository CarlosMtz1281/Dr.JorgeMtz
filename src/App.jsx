
import './App.css'

import Etica from './components/Etica';
import { NavBar } from './Components/NavBar';
import Banner from './components/Banner';
import Conocenos from './components/Conocenos';
import Tratamientos from './components/Tratamientos';
import Footer from './components/Footer';

import Inicio from './pages/inicio';
import Informacion from './pages/Informacion';

import { Routes,Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path= "/Dr.JorgeMtz/" element={<Inicio/>}/>
        <Route path= "/Dr.JorgeMtz/Informacion" element={<Informacion/>}/>


      </Routes>



    </div>
  )
}

export default App
