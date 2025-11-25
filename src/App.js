import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Usuarios from './pages/user';
import PerfilUsuario from './pages/profile'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/usuarios' element={<Usuarios/>}></Route>
        <Route path='/profile' element={<PerfilUsuario/>}></Route>
      </Routes>
    </Router>    
  );
}

export default App;
