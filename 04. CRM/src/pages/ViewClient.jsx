import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const ViewClient = () => {
  const [client, setClient] = useState({});
  const [load, setLoad] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getClient = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(url);
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
      setLoad(!load);
    };
    getClient();
  }, []);
  return load ? (
    <Spinner />
  ) : Object.keys(client).length === 0 ? (
    <h1 className="font-black text-4xl text-blue-900">
      No hay clientes registrados
    </h1>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-900">
        Viendo información de {client.name}
      </h1>
      <p className="text-gray-600 text-xl mt-10">
        <span className="uppercase font-bold text-gray-800">
          Nombre del cliente:{" "}
        </span>{" "}
        {client.name}
      </p>
      <p className="text-gray-700 text-xl mt-4">
        <span className="uppercase font-bold text-gray-800">
          Empresa del cliente:{" "}
        </span>{" "}
        {client.enterprise}
      </p>
      <p className="text-gray-700 text-xl mt-4">
        <span className="uppercase font-bold text-gray-800">
          Email del cliente:{" "}
        </span>{" "}
        {client.email}
      </p>
      {client.phone && (
        <p className="text-gray-700 text-xl mt-4">
          <span className="uppercase font-bold text-gray-800">
            Teléfono del cliente:{" "}
          </span>{" "}
          {client.phone}
        </p>
      )}
      {client.notes && (
        <p className="text-gray-700 text-xl mt-4">
          <span className="uppercase font-bold text-gray-800">
            Notas del cliente:{" "}
          </span>{" "}
          {client.notes}
        </p>
      )}
    </div>
  );
};

export default ViewClient;
