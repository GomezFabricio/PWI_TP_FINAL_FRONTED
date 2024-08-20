import Navbar from '../../components/Navbar/Navbar';
import './AcercaDe.css';

function AcercaDe() {
    return (
      <>
        <Navbar />
        <div className="acerca-de-container">
          <h1 className="acerca-de-title">Acerca de esta aplicación</h1>
          <p className="acerca-de-description">
            Esta aplicación fue desarrollada como un proyecto para practicar React.
          </p>
        </div>
      </>
    );
}

export default AcercaDe;