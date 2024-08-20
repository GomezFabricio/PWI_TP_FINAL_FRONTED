import './Tarea.css';

function Tarea({ tarea, toggleCompletada, eliminarTarea }) {
    return (
      <li className="tarea-item">
        <span
          onClick={() => toggleCompletada(tarea.id)}
          className={`tarea-text ${tarea.completada ? 'tarea-completada' : ''}`}
        >
          {tarea.texto}
        </span>
        <button 
          onClick={() => eliminarTarea(tarea.id)} 
          className="tarea-eliminar"
        >
          Eliminar
        </button>
      </li>
    );
}

export default Tarea;