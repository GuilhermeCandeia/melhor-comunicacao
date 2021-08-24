import React, { Component } from "react";
import axios from "axios";

import CelularForm from "./CelularForm";

// Update crUd

class EditCelular extends Component {
  state = {
    modelo: "",
    marca: "",
    cor: "",
    preço: "",
    iniciodavenda: "",
    fimdavenda: "",
  };

  componentDidMount = async () => {
    try {
      const response = await axios.get(
        `https://phones--melhorcom.repl.co/phone/${this.props.match.params.id}`
      );
      this.setState({ ...response.data });
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckbox = (event) => {
    //   this.state[event.target.name] // false
    //   !this.state[event.target.name] // true
    this.setState({ [event.target.name]: !this.state[event.target.name] });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(
        `https://phones--melhorcom.repl.co/phone/${this.props.match.params.id}`,
        this.state
      );
      //   console.log(response)
      this.props.history.push("/");
      //   const win = window.open("/", "_blank");
      //   win.focus();
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    // console.log(this.props);
    return (
      <CelularForm
        state={this.state}
        handleChange={this.handleChange}
        handleCheckbox={this.handleCheckbox}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default EditCelular;
