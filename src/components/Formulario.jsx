import React, { useState } from "react";

const Formulario = ({
  colaboradores,
  setColaboradores,
  colabFilter,
  setColabFilter,
  addAlert,
}) => {
  const [datosColaborador, setDatosColaborador] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleInputs = (e) => {
    const inputId = {
      inputNombre: "nombre",
      inputEmail: "correo",
      inputEdad: "edad",
      inputCargo: "cargo",
      inputTelefono: "telefono",
    };

    const prop = inputId[e.target.id];

    if (prop) {
      setDatosColaborador({ ...datosColaborador, [prop]: e.target.value });
    }
  };

  const validarDatos = (e) => {
    e.preventDefault();
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexTelef = /^[0-9]{9}$/;

    if (
      datosColaborador.nombre.trim() === "" ||
      datosColaborador.correo === "" ||
      datosColaborador.edad === "" ||
      datosColaborador.cargo.trim() === "" ||
      datosColaborador.telefono === ""
    ) {
      addAlert({
        texto: "Todos los campos son obligatorios",
        tipo: "danger",
        estado: true,
      });
    } else if (!regexEmail.test(datosColaborador.correo)) {
      addAlert({
        texto: "Por favor, introduce un correo válido",
        tipo: "danger",
        estado: true,
      });
    } else if (!regexTelef.test(datosColaborador.telefono)) {
      addAlert({
        texto: "Por favor, introduce un número de teléfono válido (9 dígitos)",
        tipo: "danger",
        estado: true,
      });
    } else {
      // All data is valid, add the new colaborador
      const newColaborador = {
        id: colaboradores.length + 1, // Generate a new ID
        ...datosColaborador,
      };

      // Update the state with the new colaborador
      setColaboradores([...colaboradores, newColaborador]);

      // Clear the form fields and filters
      setDatosColaborador({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
      });
      setColabFilter((prevFilter) => [...prevFilter, newColaborador]);
      addAlert({
        texto: "Colaborador agregado exitosamente",
        tipo: "success",
        estado: true,
      });
    }
  };

  return (
    <div className="formulario col-12 col-lg-4 text-center p-4 rounded">
      <h3>Agregar Colaborador</h3>

      <form noValidate onSubmit={validarDatos}>
        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.nombre}
            type="text"
            className="form-control"
            id="inputNombre"
            placeholder="Nombre del Colaborador"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.correo}
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder="Email del Colaborador"
            pattern=".*"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.edad}
            type="number"
            className="form-control"
            id="inputEdad"
            placeholder="Edad del Colaborador"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.cargo}
            type="text"
            className="form-control"
            id="inputCargo"
            placeholder="Cargo del Colaborador"
          />
        </div>

        <div className="mb-3">
          <input
            onChange={handleInputs}
            value={datosColaborador.telefono}
            type="text"
            className="form-control"
            id="inputTelefono"
            placeholder="Teléfono del Colaborador"
          />
        </div>
        <div className="d-grid mb-3">
          <button type="submit" className="btn btn-dark">
            Agregar Colaborador
          </button>
          {alert.estado && (
            <div
              className={`alert alert-${alert.tipo}`}
              style={{ width: "100%" }}
            >
              {alert.texto}
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Formulario;
