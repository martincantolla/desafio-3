import React from "react";

const Buscador = ({ colaboradores, colabFilter }) => {
  const inputHandle = (e) => {
    const buscarColab = e.target.value.toLowerCase();

    const resultado = colaboradores.filter(
      (colaborador) =>
        colaborador.nombre.toLowerCase().includes(buscarColab) ||
        colaborador.correo.toLowerCase().includes(buscarColab) ||
        colaborador.edad.includes(buscarColab) ||
        colaborador.cargo.toLowerCase().includes(buscarColab) ||
        colaborador.telefono.toLowerCase().includes(buscarColab)
    );

    colabFilter(resultado);
  };

  return (
    <div className="buscador col-12 col-md-6">
      <input
        type="text"
        name="buscador"
        id="buscador"
        placeholder="Busca un colaborador"
        className="form-control mb-3"
        onChange={inputHandle}
      />
    </div>
  );
};

export default Buscador;
