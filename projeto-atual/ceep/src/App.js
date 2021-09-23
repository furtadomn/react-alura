import React, { Component } from "react";
import {ListaDeNotas} from "./components/ListaDeNotas/lista-de-notas"
import {FormularioCadastro} from "./components/FormularioCadastro/formulario-cadastro"
import "./App.css";
import "./index.css";

class App extends Component {
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
