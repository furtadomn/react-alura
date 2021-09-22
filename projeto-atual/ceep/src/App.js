import React, { Component } from "react";
import {ListaDeNotas} from "./components/lista-de-notas"
import {FormularioCadastro} from "./components/formulario-cadastro"


class App extends Component {
  render() {
    return (
      <section>
        <FormularioCadastro/>
        <ListaDeNotas/>
      </section>
    );
  }
}

export default App;
