import React from "react";
import "./style/Address.css";

const Address = () => {
  return (
    <>
      <div className="address_box">
        <h3>Info Evento</h3>
        <br />
        <div className="info_box">
            <span><b>Día</b>: 16 de Diciembre</span>
            <br/>
            <span><b>Hora</b>: 20.30</span>
            <br/>
            <span><b>Lugar</b>: Carrer del Actor Llorens, 28</span>
            <br/>
            <span><b>Timbre</b>: 5 - Piso 2</span>
            <br/>
            <span><b>Dresscode</b>: Semiformal</span>
        </div>
      </div>
    </>
  );
};

export default Address;
