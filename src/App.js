import React, { useState } from 'react';
import './App.css';
import Formulario from './Formulario';
import Tabla from './Tabla';

function App() {
  const [usuarios, setUsuarios] = useState([]);

  const agregarUsuario = (nuevoUsuario) => {
    setUsuarios([...usuarios, nuevoUsuario]);
  };

  const eliminarUsuario = (index) => {
    const nuevosUsuarios = usuarios.filter((_, i) => i !== index);
    setUsuarios(nuevosUsuarios);
  };

  return (
    <div className="App">
      <Formulario agregarUsuario={agregarUsuario} />
      <Tabla usuarios={usuarios} eliminarUsuario={eliminarUsuario} />
    </div>
  );
}

export default App;