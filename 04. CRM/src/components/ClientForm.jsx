import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Error from "./Error";

const ClientForm = ({ client }) => {
  // define navigate
  const navigate = useNavigate();
  // define new client schema to validation
  const newClientSchema = Yup.object().shape({
    name: Yup.string().required("El nombre del cliente es obligatorio"),
    enterprise: Yup.string().required(
      "El nombre de la empresa del es obligatorio"
    ),
    email: Yup.string()
      .email("Email invalido")
      .required("El email del cliente es  obligatorio"),
    phone: Yup.number()
      .positive("Teléfono inválido")
      .integer("Teléfono inválido")
      .typeError("Teléfono inválido"),
  });
  // define handle submit to save new client
  const handleSubmit = async (values) => {
    try {
      let response;
      if (client.id) {
        // saving edit client
        const url = `${import.meta.env.VITE_API_URL}/${client.id}`;
        response = await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      } else {
        // saving new client
        const url = import.meta.env.VITE_API_URL;
        response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
      }
      await response.json();
      navigate("/clients");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded shadow-md md:w-3/4 mx-auto">
      {client?.name ? (
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          Editar Cliente
        </h1>
      ) : (
        <h1 className="text-gray-600 font-bold text-xl uppercase text-center">
          Agregar Cliente
        </h1>
      )}
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: client?.name ?? "",
          enterprise: client?.enterprise ?? "",
          email: client?.email ?? "",
          phone: client?.phone ?? "",
          notes: client?.notes ?? "",
        }}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form className="mt-1">
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Nombre: <span className="text-red-500 text-sm">*</span>
                </label>
                <Field
                  id="name"
                  name="name"
                  type="text"
                  className="mt-2 block w-full p-3 bg-gray-200 focus:outline focus:outline-2 focus:outline-blue-500"
                  placeholder="Nombre del cliente"
                />
                {errors.name && touched.name ? (
                  <Error message={errors.name} />
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="enterprise">
                  Empresa: <span className="text-red-500 text-sm">*</span>
                </label>
                <Field
                  id="enterprise"
                  type="text"
                  name="enterprise"
                  className="mt-2 block w-full p-3 bg-gray-200 focus:outline focus:outline-2 focus:outline-blue-500"
                  placeholder="Empresa del cliente"
                />
                {errors.enterprise && touched.enterprise ? (
                  <Error message={errors.enterprise} />
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="email">
                  Email: <span className="text-red-500 text-sm">*</span>
                </label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  className="mt-2 block w-full p-3 bg-gray-200 focus:outline focus:outline-2 focus:outline-blue-500"
                  placeholder="Email del cliente"
                />
                {errors.email && touched.email ? (
                  <Error message={errors.email} />
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="phone">
                  Teléfono:
                </label>
                <Field
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-2 block w-full p-3 bg-gray-200 focus:outline focus:outline-2 focus:outline-blue-500"
                  placeholder="Télefono del cliente"
                />
                {errors.phone && touched.phone ? (
                  <Error message={errors.phone} />
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notes">
                  Notas:
                </label>
                <Field
                  id="notes"
                  as="textarea"
                  name="notes"
                  className="mt-2 block w-full p-3 bg-gray-200 focus:outline focus:outline-2 focus:outline-blue-500"
                  placeholder="Télefono del cliente"
                />
              </div>
              <input
                type="submit"
                value={client?.name ? "Editar Cliente" : "Agregar Cliente"}
                className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold hover:bg-blue-900 hover:transition hover:cursor-pointer"
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

ClientForm.defaultProps = {
  client: {},
};

export default ClientForm;
