import ClientForm from "../components/ClientForm";

const NewClient = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Cliente</h1>
      <p className="mt-3">Completa los siguientes campos para registrar un cliente</p>
      <ClientForm />
    </>
  );
};

export default NewClient;
