import { BrowserRouter, Route } from "react-router-dom";

import CelularList from "./components-melhor-celular/celularCRUD/CelularList";
import CelularDetails from "./components-melhor-celular/celularCRUD/CelularDetails";
import EditCelular from "./components-melhor-celular/celularCRUD/form/EditCelular";
import NewCelular from "./components-melhor-celular/celularCRUD/form/NewCelular";
import DeleteCelular from "./components-melhor-celular/celularCRUD/DeleteCelular";
import Navbar from "./components-melhor-celular/navbar-melhor-celular/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path="/" component={CelularList} />
      <Route exact path="/celulares/:id" component={CelularDetails} />
      <Route exact path="/celular/new-celular" component={NewCelular} />
      <Route exact path="/celular/:id/edit/" component={EditCelular} />
      <Route exact path="/celular/:id/delete" component={DeleteCelular} />
    </BrowserRouter>
  );
}

export default App;
