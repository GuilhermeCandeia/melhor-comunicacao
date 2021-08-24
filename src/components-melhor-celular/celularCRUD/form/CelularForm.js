import React from "react";

function CelularForm(props) {
  return (
    <form className="container my-5">
      <div className="mb-3">
        <label htmlFor="celularModeloInput" className="form-label">
          Modelo
        </label>
        <input
          type="text"
          className="form-control"
          name="modelo"
          id="celularModeloInput"
          onChange={props.handleChange}
          value={props.state.modelo}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="celularMarcaInput" className="form-label">
          Marca
        </label>
        <input
          type="text"
          className="form-control"
          name="marca"
          id="celularMarcaInput"
          onChange={props.handleChange}
          value={props.state.marca}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="celularCorInput" className="form-label">
          Cor
        </label>
        <input
          type="text"
          className="form-control"
          name="cor"
          id="celularCorInput"
          onChange={props.handleChange}
          value={props.state.cor}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="celularPrecoInput" className="form-label">
          Preço
        </label>
        <input
          type="text"
          className="form-control"
          name="preco"
          id="celularPrecoInput"
          onChange={props.handleChange}
          value={props.state.preco}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="celularInicioDaVendaInput" className="form-label">
          Início da venda
        </label>
        <input
          type="text"
          className="form-control"
          name="iniciodavenda"
          id="celularInicioDaVendaInput"
          onChange={props.handleChange}
          value={props.state.iniciodavenda}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="celularFimDaVendaInput" className="form-label">
          Fim da venda
        </label>
        <input
          type="text"
          className="form-control"
          name="fimdavenda"
          id="celularFimDaVendaInput"
          onChange={props.handleChange}
          value={props.state.fimdavenda}
        />
      </div>

      <button
        onClick={props.handleSubmit}
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  );
}

export default CelularForm;
