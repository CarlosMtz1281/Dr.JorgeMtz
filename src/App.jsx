
import './App.css'


import { NavBar } from './Components/NavBar';
import Banner from './components/Banner';
import Conocenos from './components/Conocenos';
import Tratamientos from './components/Tratamientos';
import Footer from './components/Footer';

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Conocenos/>
      <Tratamientos/>
      <Footer/>

    </div>
  )
}

export default App
