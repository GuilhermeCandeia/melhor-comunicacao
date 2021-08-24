import React, { Component } from "react";
import axios from "axios";

class CelularDetails extends Component {
  state = {
    celulares: "",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://phones--melhorcom.repl.co/phone/${this.props.match.params.id}`
      );
      console.log(response);
      this.setState({ celulares: { ...response.data } });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="container d-flex flex-column">
        <h1>{this.state.celulares.name} Detalhes do produto</h1>
        <span>
          <strong>Modelo: </strong>
          {this.state.celulares.id}
        </span>
        <span>
          <strong>Marca: </strong>
          {this.state.celulares.marca}
        </span>
        <span>
          <strong>Cor: </strong>
          {this.state.celulares.cor}
        </span>
        <span>
          <strong>Preço: </strong>
          {this.state.celulares.preco}
        </span>
        <span>
          <strong>Início das vendas: </strong>
          {this.state.celulares.iniciodavenda}
        </span>
        <span>
          <strong>Fim das vendas: </strong>
          {this.state.celulares.fimdavenda}
        </span>
      </div>
    );
  }
}

export default CelularDetails;
