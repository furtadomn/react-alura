import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas, novaNota]
    const novoEstado = {
      notas: novoArrayNotas
    }
    this.setState(novoEstado)
  }
  
  render() {
    return (
      <div>
        <h1 className="header">Bloco de Notas</h1>
        <p className="descricao">Anotações e pensamentos...</p>
        <section className="conteudo">
          <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
          <ListaDeNotas notas={this.state.notas}/>
        </section>
      </div>
    );
  }
}

export default App;