import './FormularioTarea.css';
import { useState } from 'react';

function FormularioTarea({ agregarTarea }) {
  const [input, setInput] = useState('');

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (input.trim()) {
      agregarTarea(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={manejarEnvio} className="formulario-tarea">
      <input
        type="text"
        value={input}
        onChange={manejarCambio}
        placeholder="Nueva tarea"
        className="formulario-input"
      />
      <button type="submit" className="formulario-boton">Agregar</button>
    </form>
  );
}

export default FormularioTarea;