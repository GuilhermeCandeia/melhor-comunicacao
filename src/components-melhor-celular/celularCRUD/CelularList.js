import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class CelularList extends Component {
  state = {
    celulares: [],
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "https://phones--melhorcom.repl.co/phone"
      );
      console.log(response);

      this.setState({ celulares: [...response.data] });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container my-5">
        <table className="table table-striped table-hover">
          <thead className="thead-white">
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Modelo</th>
              <th scope="col">Preço</th>
              <th scope="col">Marca</th>
              <th scope="col">Cor</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.state.celulares.map((celulares) => {
              return (
                <tr key={celulares.id}>
                  <th scope="row">{celulares.id}</th>
                  <td>{celulares.modelo}</td>
                  <td>{celulares.preco}</td>
                  <td>{celulares.marca}</td>
                  <td>{celulares.cor}</td>
                  <td>
                    <Link to={`/celular/${celulares.id}`}>Ver Detalhes</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CelularList;
