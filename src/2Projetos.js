import React, { useEffect, useState } from "react";
import { app } from "./firebase.js";
import { getDatabase, ref, onValue } from "firebase/database";
import "./App.css";

class Projetos extends React.Component {
  constructor() {
    super();
    this.state = {
      projetos: [],
    };
  }

  componentDidMount() {
    const database = getDatabase(app);
    const projetosRef = ref(database, "projetos");

    // Monitora alterações no banco de dados
    onValue(projetosRef, (snapshot) => {
      const data = snapshot.val();

      // Atualiza o estado com os dados do banco de dados
      if (data) {
        const projetosArray = Object.values(data);
        this.setState({ projetos: projetosArray });
      }
    });
  }

  render() {
    return (
      <section id="projetos">
        <div className="carrousel-filmes">
          <div className="owl-carousel owl-theme">
            {this.state.projetos.map((projeto, index) => (
              <a key={index} href={projeto.link}>
                <div className="item">
                  <img
                    className="box-filme"
                    src={projeto.imagem}
                    alt={projeto.nome}
                  />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Projetos;
