import { Table } from "react-bootstrap";

const Listado = ({ colaboradores, deleteColaborador }) => {
  const colabdata = colaboradores.map((colaborador) => (
    <tr key={colaborador.id}>
      <td>{colaborador.id}</td>
      <td>{colaborador.nombre}</td>
      <td>{colaborador.correo}</td>
      <td>{colaborador.edad}</td>
      <td>{colaborador.cargo}</td>
      <td>{colaborador.telefono}</td>
      <td>
        <i
          className="fa-solid fa-trash-can"
          onClick={() => deleteColaborador(colaborador.id)}
          style={{ cursor: "pointer", color: "red" }}
        ></i>
      </td>
    </tr>
  ));

  return (
    <div className="table-responsive col-12 col-lg-8 mb-2 text-center">
      <Table variant="dark" className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Edad</th>
            <th>Cargo</th>
            <th>Telefono</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>{colabdata}</tbody>
      </Table>
    </div>
  );
};

export default Listado;
