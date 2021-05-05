import React, { useState, useEffect } from "react";
import Formulario from "./components/formulario";
import Tabla from "./components/tabla";
import { v4 as uuidv4 } from "uuid";
import "./styles/basic.css";

import Maps from "./components/maps";
import credentials from "./components/credentials";

const mapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${credentials.mapskey}`;

function App() {
  const [latitud, setLatitud] = useState(0);
  const [longitud, setLongitud] = useState(0);

  const [usuarios, setUsuarios] = useState(
    JSON.parse(localStorage.getItem("usuarios")) || []
  );
  useEffect(() => {
    const json = JSON.stringify(usuarios);
    localStorage.setItem("usuarios", json);
  }, [usuarios]);
  const agregaUsuario = (nuevoUsuario) => {
    navigator.geolocation.getCurrentPosition(function (position) {

      setLatitud(position.coords.latitude);
      setLongitud(position.coords.longitude);

      nuevoUsuario.lat = position.coords.latitude;
      nuevoUsuario.lng = position.coords.longitude;

      nuevoUsuario.id = uuidv4();
      setUsuarios([...usuarios, nuevoUsuario]);

      console.log("usuario = > ", nuevoUsuario);
    });
  };
  const eliminaUsuario = (idAEliminar) => {
    const filtroUsuario = usuarios.filter(
      (usuario) => usuario.id !== idAEliminar
    );
    setUsuarios(filtroUsuario);
  };

  const localizaUsuario = (uss) => {
    console.log(" entragsdfgs ", uss);
    setLatitud(uss.lat);
    setLongitud(uss.lng);
  };

  return (
    <div className="contenedor">
      <div className="divisor">
        <div className="row mb-6 formulario">
          <div className="col campos">
            <Formulario agregaUsuario={agregaUsuario} />
          </div>
          <div className="col mapa">
            <div style={{ height: "100%", width: "100%" }}>
              <Maps
                googleMapURL={mapURL}
                containerElement={<div style={{ height: "400px" }} />}
                mapElement={<div style={{ height: "100%" }} />}
                loadingElement={<p>Cargando ..</p>}
                latitud={latitud}
                longitud={longitud}
              />
            </div>
          </div>
        </div>
        <div className="col tabla">
          <Tabla
            usuarios={usuarios}
            eliminaUsuario={eliminaUsuario}
            localizaUsuario={localizaUsuario}
          />
        </div>
      </div>
      {/*  <Empleados /> */}
    </div>
  );
}

export default App;
