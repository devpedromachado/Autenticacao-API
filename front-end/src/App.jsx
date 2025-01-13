import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup'; 
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div className='rotas'>
        <Routes>
          <Route path="/" element={<h1>Bem-vindo!</h1>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Link to="/signup" className='link'>Cadastre-se </Link>
        <Link to='/login' className='link'>Login</Link>
      </div>
    </Router>
  );
};

export default App;
