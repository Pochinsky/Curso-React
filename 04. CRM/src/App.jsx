import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ViewClient from "./pages/ViewClient";
import NewClient from "./pages/NewClient";
import EditClient from "./pages/EditClient";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clients" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path=":id" element={<ViewClient />} />
          <Route path="new" element={<NewClient />} />
          <Route path="edit/:id" element={<EditClient />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
