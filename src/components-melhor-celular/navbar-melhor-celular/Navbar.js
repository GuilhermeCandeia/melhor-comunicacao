import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          MCelular
        </Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link active"
              aria-current="page"
              to="/celular/new-celular"
            >
              Adicionar Novo Aparelho
            </Link>
            {/* <Link className="nav-link" href="#">
              Features
            </Link>
            <Link className="nav-link" href="#">
              Pricing
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
