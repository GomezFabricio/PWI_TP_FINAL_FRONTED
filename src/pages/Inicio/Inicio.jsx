import { Link } from 'react-router-dom'; 
import Navbar from '../../components/Navbar/Navbar';
import './Inicio.css';

function Inicio() {
  return (
    <>
      <Navbar/>
      <div className="inicio-container">
        <h1 className="inicio-title">Bienvenido a la Lista de Tareas</h1>
        <Link to="/tareas" className="inicio-link">Ver tus Tareas</Link>
      </div>
    </>
  );
}

export default Inicio;
