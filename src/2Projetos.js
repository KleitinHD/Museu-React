import React, { useEffect, useState } from "react";
import { app, storage } from "./firebase.js";
import { getDatabase, ref, onValue } from "firebase/database";
import { getDownloadURL } from "firebase/storage";
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

    onValue(projetosRef, async (snapshot) => {
      const data = snapshot.val();

      if (data) {
        const projetosArray = Object.values(data);

        for (const projeto of projetosArray) {
          if (projeto.imagemRef) {
            try {
              const imageUrl = await getDownloadURL(storage, projeto.imagemRef);
              projeto.imagem = imageUrl;
            } catch (error) {
              console.error("Erro ao obter URL da imagem:", error);
            }
          }
        }

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
