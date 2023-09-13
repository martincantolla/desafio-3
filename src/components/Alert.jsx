import React from "react";

const Alert = ({ alerta }) => {
  return (
    <div
      className={`alert alert-${alerta.tipo}`}
      style={{ display: alerta.estado ? "block" : "none" }}
    >
      {alerta.texto}
    </div>
  );
};

export default Alert;
