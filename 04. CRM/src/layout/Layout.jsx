import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const currentURL = location.pathname;
  return (
    <div className="md:flex md:min-h-screen">
      <div className="md:w-1/4 bg-blue-900 px-5 py-10">
        <h2 className="text-4xl font-black text-center text-white">
          CRM - Clientes
        </h2>
        <nav className="mt-10">
          <Link
            className={`${
              currentURL === "/clients" ? "text-blue-300" : "text-white"
            } text-white text-2xl black mt-2 hover:text-blue-300`}
            to="/clients"
          >
            Clientes
          </Link>
          <Link
            className={`${
              currentURL === "/clients/new" ? "text-blue-300" : "text-white"
            } text-white text-2xl block mt-2 hover:text-blue-300`}
            to="/clients/new"
          >
            Nuevo cliente
          </Link>
        </nav>
      </div>
      <div className="md:w-3/4 md:h-screen p-10 bg-slate-200 overflow-scroll">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
