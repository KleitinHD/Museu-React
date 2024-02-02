import React from "react";
import "./App.css";

function Equipe() {
  return (
    <section id="equipe" class="equipe-section">
      <div class="carrousel-filmes">
        <h3 class="subtitulo">EQUIPE</h3>
        <div class="container">
          <div>
            <img
              class="box-filme"
              src="img/equipe/bruna.png"
              alt="Bruna Fantinel"
            />
          </div>
          <div>
            <img
              class="box-filme"
              src="img/equipe/diego.png"
              alt="Diego Boufleuer"
            />
          </div>
          <div>
            <img
              class="box-filme"
              src="img/equipe/thales.png"
              alt="Thales Martins"
            />
          </div>
          <div>
            <img
              class="box-filme"
              src="img/equipe/kerlon.png"
              alt="Kerlon Ribeiro"
            />
          </div>
          <div>
            <img class="box-filme" src="img/equipe/dany.png" alt="Dany Senat" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Equipe;
