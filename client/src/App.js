import "./App.css";

import { Redirect, Router } from "@reach/router";
import NotFound from "./views/NotFound";
import Pet from "./views/Pet";
import Pets from "./views/Pets";
import NewPet from "./views/NewPet.js";
import EditPet from "./views/EditPet";

function App() {
  return (
    <div style={{ textAlign: "center", width: "80%", margin: "0 auto" }}>

      <Router>

        <Pet path="/pets/:id" />
        <Pets path="/pets" />
        <EditPet path="/pets/:id/edit" />
        <NewPet path="/pets/new" />
        <Redirect from="/" to="/pets" noThrow="true" />
        {/* If no routes are matched, render this */}
        <NotFound default path="/notfound" />
      </Router>
    </div>
  );
}

export default App;
