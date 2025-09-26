import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './comandos/home '
import Detalles from './comandos/detalles'
import favorito from './comandos/favorito'
import informacion from './comandos/información '
import original from './comandos/original'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Route>
       <nav className="c-menu">
          <Link to="/">Home</Link>
          <Link to="/informacion">Informacion</Link>
          <Link to="/original">original</Link>
          <Link to="/favorito">Favorito</Link>
        </nav>
     <Routes>
          <Route path="/" element={<Home /> } />
          <Route path="/informacion" element={<informacion /> } />
          <Route path="/mapa" element={<original /> } />
          <Route path="/favorito" element={<favorito /> } />
          <Route path="/detalles" element={<Detalles /> } />
      </Routes>
    </Route>
  )
}

export default App
