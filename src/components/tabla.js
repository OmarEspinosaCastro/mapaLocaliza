import React from "react";

const Tabla = (props) => {
  return (
    <table class="table" >
      <thead  class="thead-dark">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
          <th scope="col">Fecha de Nacimiento</th>
          <th scope="col">Calle</th>
          <th scope="col">Número</th>
          <th scope="col">Colonia</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {props.usuarios.length > 0 ? (
          props.usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <th  scope="row">{usuario.nombre}</th>
              <td>{usuario.email}</td>
              <td>{usuario.fecha}</td>
              <td>{usuario.calle}</td>
              <td>{usuario.numero}</td>
              <td>{usuario.colonia}</td>
              <td>
                <button  className="btn btn-primary" type="submit"
                  onClick={() => {
                    props.eliminaUsuario(usuario.id);
                  }}
                  className="button muted-button"
                >
                  Elimina
                </button>
              </td>
              <td>
                <button  className="btn btn-primary"  type="submit"
                  onClick={() => {
                     props.localizaUsuario(usuario);
                  }}
                  className="button muted-button"
                >
                  Localiza
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Tabla;
