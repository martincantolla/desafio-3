import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./BaseColaboradores";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Buscador from "./components/Buscador";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [colabFilter, setColabFilter] = useState(colaboradores);
  const [alert, setAlert] = useState({
    texto: "",
    tipo: "",
    estado: false,
  });

  const deleteColaborador = (id) => {
    const updatedColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== id
    );
    setColaboradores(updatedColaboradores);
    setColabFilter(updatedColaboradores);
  };

  const addAlert = (newAlert) => {
    setAlert(newAlert);

    setTimeout(() => {
      setAlert({
        texto: "",
        tipo: "",
        estado: false,
      });
    }, 5000);
  };

  return (
    <>
      <h1 className="my-4">
        <i className="fa-solid fa-user-group"></i> Lista de Colaboradores
      </h1>
      <Buscador colaboradores={colaboradores} colabFilter={setColabFilter} />
      <div className="row row-cols-2 justify-content-end">
        <Listado
          colaboradores={colaboradores}
          setColaboradores={setColaboradores}
          colabFilter={colabFilter}
          setColabFilter={setColabFilter}
          deleteColaborador={deleteColaborador}
        />
        <Formulario
          className="formulario"
          colaboradores={colaboradores}
          setColaboradores={setColaboradores}
          colabFilter={colabFilter}
          setColabFilter={setColabFilter}
          addAlert={addAlert}
        />
        <div className="alert-container">
          <Alert className="alert" alerta={alert} />
        </div>
      </div>
    </>
  );
}

export default App;
