import React, { Component } from "react"
import CardNota from "./card-nota";

export class ListaDeNotas extends Component {
  render() {
    return (
      <ul>
        <li>
          <CardNota/>
        </li>
      </ul>
    );
  }
}

export default ListaDeNotas;