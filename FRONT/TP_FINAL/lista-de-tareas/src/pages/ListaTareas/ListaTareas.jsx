// src/pages/ListaTareas/ListaTareas.jsx
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import FormularioTarea from '../../components/FormularioTarea/FormularioTarea';
import Tarea from '../../components/Tarea/Tarea';
import FiltroTareas from '../../components/FiltroTareas/FiltroTareas';
import './ListaTareas.css';

function ListaTareas() {
  // Cargar tareas desde localStorage al inicializar el estado
  const [tareas, setTareas] = useState(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    return tareasGuardadas ? JSON.parse(tareasGuardadas) : [];
  });

  // Guardar tareas en localStorage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, { id: Date.now(), texto: tarea, completada: false }]);
  };

  const toggleCompletada = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  const [filtro, setFiltro] = useState('todas');

  const tareasFiltradas = tareas.filter((tarea) => {
    if (filtro === 'completadas') return tarea.completada;
    if (filtro === 'pendientes') return !tarea.completada;
    return true;
  });

  return (
    <>
      <Navbar/>
      <div className="lista-tareas-container">
        <h1 className="lista-tareas-title">Lista de Tareas</h1>
        <FormularioTarea agregarTarea={agregarTarea} />
        <FiltroTareas setFiltro={setFiltro} />
        <ul className="lista-tareas-list">
          {tareasFiltradas.map((tarea) => (
            <Tarea
              key={tarea.id}
              tarea={tarea}
              toggleCompletada={toggleCompletada}
              eliminarTarea={eliminarTarea}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListaTareas;
