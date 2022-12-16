import React from "react";
import "./style/Address.css";

const Address = () => {
  return (
    <>
      <div className="address_box">
        <h3>Info Evento</h3>
        <br />
        <div className="info_box">
            <span><b className="selected">Día</b>: 16 de Diciembre</span>
            <br/>
            <span><b className="selected">Hora</b>: 20.30</span>
            <br/>
            <span><b className="selected">Lugar</b>: Carrer del Actor Llorens, 28</span>
            <br/>
            <span><b className="selected">Timbre</b>: Puerta 5 - Piso 2</span>
            <br/>
            <span><b className="selected">Dresscode</b>: Semiformal</span>
        </div>
      </div>
    </>
  );
};

export default Address;
