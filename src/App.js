import React, { useState } from "react";
import Home from "./Home"; // Importa el componente Home
import Acercade from "./Acercade"; // Importa el componente Acercade
import Contacto from "./Contacto"; // Importa el componente Contacto
import './App.css'; // Importa el archivo de estilos

const App = () => {
  const [currentView, setCurrentView] = useState("Home");

  // Renderiza el componente actual basado en el estado
  const renderView = () => {
    switch (currentView) {
      case "Home":
        return <Home />;
      case "Acercade":
        return <Acercade />;
      case "Contacto":
        return <Contacto />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      {/* Navegación */}
      <nav className="nav">
        <button className="button" onClick={() => setCurrentView("Home")}>
          Inicio
        </button>
        <button className="button" onClick={() => setCurrentView("Acercade")}>
          Acerca de
        </button>
        <button className="button" onClick={() => setCurrentView("Contacto")}>
          Contacto
        </button>
      </nav>

      {/* Contenido dinámico */}
      <main>{renderView()}</main>

      {/* Pie de página */}
      <footer className="footer">
        <p>&copy; 2024 Gestor de Tareas. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
