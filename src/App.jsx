import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Inicio/Inicio';
import ListaTareas from './pages/ListaTareas/ListaTareas';
import AcercaDe from './pages/AcercaDe/AcercaDe';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tareas" element={<ListaTareas />} />
        <Route path="/acerca" element={<AcercaDe />} />
      </Routes>
    </Router>
  );
}

export default App;
