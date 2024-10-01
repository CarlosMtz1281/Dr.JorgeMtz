
import './App.css'

import Inicio from './pages/inicio';
import Informacion from './pages/Informacion';


import InicioM from './pages/inicioM';
import InformacionM from './pages/InformacionM';

import BlogsPage from './pages/BlogsPage';

import Blog1 from "./pages/blogs/blog1";
import Blog2 from "./pages/blogs/Blog2";
import Blog3 from "./pages/blogs/Blog3";
import Blog4 from "./pages/blogs/Blog4";


import { Routes,Route } from 'react-router-dom';
import Blog from './components/info/MBlog';

import './styles/BlogPages.css';
import "./styles/blog.css";
import "./assets/font-awesome/css/font-awesome.min.css";


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
        <Route path= "/Blog" element={<BlogsPage/>}/>
        <Route path= "/blogs/MuelasDelJuicio" element={<Blog1/>}/>
        <Route path= "/blogs/ImplantesDentales" element={<Blog2/>}/>
        <Route path= "/blogs/ExtraccionDental" element={<Blog3/>}/>
        <Route path= "/blogs/InjertoHueso" element={<Blog4/>}/>

    </Routes>
    )
  }

  const desktopV = () => {
    return (

        <Routes>
          <Route path= "/" element={<Inicio/>}/>
          <Route path= "/Informacion" element={<Informacion/>}/>
          <Route path= "/Blog" element={<BlogsPage/>}/>
          <Route path= "/blogs/MuelasDelJuicio" element={<Blog1/>}/>
          <Route path= "/blogs/ImplantesDentales" element={<Blog2/>}/>
          <Route path= "/blogs/ExtraccionDental" element={<Blog3/>}/>
          <Route path= "/blogs/InjertoHueso" element={<Blog4/>}/>
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
