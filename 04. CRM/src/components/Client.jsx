import { useNavigate } from "react-router-dom";

const Client = ({ client, handleDelete }) => {
  const navigate = useNavigate();
  const { name, enterprise, email, phone, notes, id } = client;
  return (
    <tr className="border-b-2 border-b-gray-200 hover:bg-gray-100">
      <td className="p-3">{name}</td>
      <td className="p-3">
        <p>
          <span className="text-gray-800 uppercase font-bold">Email:</span>{" "}
          {email}
        </p>
        {client?.phone ? (
          <p>
            <span className="text-gray-800 uppercase font-bold">Teléfono:</span>{" "}
            {phone}
          </p>
        ) : null}
      </td>
      <td className="p-3">{enterprise}</td>
      <td className="p-3">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs"
          onClick={() => navigate(`/clients/${id}`)}
        >
          Ver
        </button>
        <button
          type="button"
          className="bg-orange-500 hover:bg-orange-700 block w-full text-white p-2 mt-3 uppercase font-bold text-xs"
          onClick={() => navigate(`/clients/edit/${id}`)}
        >
          Editar
        </button>
        <button
          type="button"
          className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 mt-3 uppercase font-bold text-xs"
          onClick={() => handleDelete(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default Client;
