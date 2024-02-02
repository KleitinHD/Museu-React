import React from "react";

import "./App.css";

function Projetos() {
  return (
    <section id="projetos">
      <div class="carrousel-filmes">
        <h3 class="subtitulo">PROJETOS</h3>
        <div class="owl-carousel owl-theme">
          <a href="projetos/estufa/estufa.html">
            <div class="item">
              <img
                class="box-filme"
                src="img/banners/estufa.png"
                alt="estufa"
              />
            </div>
          </a>
          <a href="nikocloud.html">
            <div class="item">
              <img
                class="box-filme"
                src="img/banners/nikocloud.png"
                alt="nikocloud"
              />
            </div>
          </a>
          <a href="tecminer.html">
            <div class="item">
              <img
                class="box-filme"
                src="img/banners/tecminer.png"
                alt="tecminer"
              />
            </div>
          </a>
          <a href="celeste.html">
            <div class="item">
              <img
                class="box-filme"
                src="img/banners/celeste.png"
                alt="celeste"
              />
            </div>
          </a>
          <a href="demeter.html">
            <div class="item">
              <img
                class="box-filme"
                src="img/banners/demeter.png"
                alt="demeter"
              />
            </div>
          </a>
          <a href="respirador.html">
            <div class="item">
              <img
                class="box-filme"
                src="img/banners/respirador.png"
                alt="respirador"
              />
            </div>
          </a>
          <a href="dryfilabox.html">
            <div class="item">
              <img
                class="box-filme"
                src="img/banners/dryfilabox.png"
                alt="pendente"
              />
            </div>
          </a>
          <a href="">
            <div class="item">
              <img
                class="box-filme"
                src="img/banners/pendente.png"
                alt="pendente"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
