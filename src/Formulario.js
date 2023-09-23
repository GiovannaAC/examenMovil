import React, { useState } from 'react';
import './Formulario.css'; 

function Formulario({ agregarUsuario }) {
  const [nombre, setNombre] = useState('');
  const [apellidoPaterno, setApellidoPaterno] = useState('');
  const [apellidoMaterno, setApellidoMaterno] = useState('');
  const [telefono, setTelefono] = useState('');

  const guardarUsuario = () => {
    if (nombre && apellidoPaterno && apellidoMaterno && telefono) {
      const nuevoUsuario = {
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        telefono,
      };
      agregarUsuario(nuevoUsuario);
      setNombre('');
      setApellidoPaterno('');
      setApellidoMaterno('');
      setTelefono('');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  const validarTexto = (text) => {
    const regex = /^[A-Za-z\s]+$/;
    return regex.test(text);
  };

  return (
    <div className="form-container">
      <h2>Formulario de Usuarios</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          className="input-text" 
          value={nombre}
          onChange={(e) => {
            if (validarTexto(e.target.value)) {
              setNombre(e.target.value);
            }
          }}
        />
      </div>
      <div>
        <label>Apellido Paterno:</label>
        <input
          type="text"
          className="input-text" 
          value={apellidoPaterno}
          onChange={(e) => {
            if (validarTexto(e.target.value)) {
              setApellidoPaterno(e.target.value);
            }
          }}
        />
      </div>
      <div>
        <label>Apellido Materno:</label>
        <input
          type="text"
          className="input-text" 
          value={apellidoMaterno}
          onChange={(e) => {
            if (validarTexto(e.target.value)) {
              setApellidoMaterno(e.target.value);
            }
          }}
        />
      </div>
      <div>
        <label>Teléfono:</label>
        <input
          type="number"
          className="input-text" 
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>
      <div>
        <button className="btn-guardar" onClick={guardarUsuario}>
          Guardar
        </button>
        <button className="btn-cancelar" onClick={() => setNombre('')}>
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default Formulario;