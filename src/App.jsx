
import './App.css'

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
