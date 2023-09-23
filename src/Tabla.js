import React from 'react';
import "./Tabla.css";

function Tabla({ usuarios, eliminarUsuario }) {
  return (
    <div className="tabla-container">
      <h2 className="tabla-title">Lista de Usuarios</h2>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido Paterno</th>
            <th>Apellido Materno</th>
            <th>Teléfono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={index}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidoPaterno}</td>
              <td>{usuario.apellidoMaterno}</td>
              <td>{usuario.telefono}</td>
              <td>
                <button className="btn-borrar" onClick={() => eliminarUsuario(index)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;