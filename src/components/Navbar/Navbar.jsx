import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="navbar-item">
          <Link to="/acerca">Acerca de</Link>
        </li>
        <li className="navbar-item">
          <Link to="/tareas">Lista de Tareas</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;