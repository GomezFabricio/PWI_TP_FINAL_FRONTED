import './FiltroTareas.css';

function FiltroTareas({ setFiltro }) {
    return (
        <div className="filtro-tareas">
            <button className="filtro-boton" onClick={() => setFiltro('todas')}>Todas</button>
            <button className="filtro-boton" onClick={() => setFiltro('completadas')}>Completadas</button>
            <button className="filtro-boton" onClick={() => setFiltro('pendientes')}>Pendientes</button>
        </div>
    );
}

export default FiltroTareas;