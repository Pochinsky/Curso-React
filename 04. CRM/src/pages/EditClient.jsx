import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ClientForm from "../components/ClientForm";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

const EditClient = () => {
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
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Editando Cliente</h1>
      <p className="mt-3">
        Utiliza este formulario para editar los datos de un cliente
      </p>
      {load ? (
        <Spinner />
      ) : client?.name ? (
        <ClientForm client={client} />
      ) : (
        <Error message="Cliente no registrado" />
      )}
    </>
  );
};

export default EditClient;
