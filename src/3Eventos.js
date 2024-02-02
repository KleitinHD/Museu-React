import React from "react";

import "./App.css";

function Eventos() {
  return (
    <section id="eventos">
      <div className="carrousel-filmes">
        <div className="owl-carousel owl-theme conquistas-carousel">
          <div className="item conquista">
            <img
              className="box-filme2"
              src="img/conquistas/STEM.jpg"
              alt="STEM"
            />
            <img className="medalha" src="img/medalhas/primeiro.png"></img>
            <h3>JORNADA STEM</h3>
            <p>O Começo de tudo</p>
          </div>
          <div className="item conquista">
            <img
              className="box-filme2"
              src="img/conquistas/SIEF_TEEN.jpeg"
              alt="SIEF TEEN"
            />
            <img className="medalha" src="img/medalhas/primeiro.png"></img>
            <h3>SIEF TEEN</h3>
            <p>Exposição de banner</p>
          </div>
          <div className="item conquista">
            <img
              className="box-filme2"
              src="img/conquistas/escolaabertacfjl.jpg"
              alt="Escola Aberta CFJL"
            />
            <img className="medalha" src="img/medalhas/primeiro.png"></img>
            <h3>Escola Aberta CFJL</h3>
            <p>Exposição de trabalhos</p>
          </div>
          <div className="item conquista">
            <img
              className="box-filme2"
              src="img/conquistas/MiniEmpresa.jpeg"
              alt="Mini Empresa"
            />
            <img className="medalha" src="img/medalhas/primeiro.png"></img>
            <h3>Mini Empresa</h3>
            <p>Doidera</p>
          </div>
          <div className="item conquista">
            <img
              className="box-filme2"
              src="img/conquistas/movaci.jpeg"
              alt="Movaci"
            />
            <img className="medalha" src="img/medalhas/destaque.png"></img>
            <h3>Movaci</h3>
            <p>Doidera</p>
          </div>
          <div className="item conquista">
            <img
              className="box-filme2"
              src="img/conquistas/SWHZ.JPG"
              alt="SW Horizontina"
            />
            <img className="medalha" src="img/medalhas/terceiro.png"></img>
            <h3>SW Horizontina</h3>
            <p>O Começo de um sonho em SW's</p>
          </div>
          <div className="item conquista">
            <img
              className="box-filme2"
              src="img/conquistas/SWCA.jpg"
              alt="SW Canoas"
            />
            <img className="medalha" src="img/medalhas/segundo.png"></img>
            <h3>SW Canoas</h3>
            <p>Viagem foda pra krlh</p>
          </div>
          <div className="item conquista">
            <img
              className="box-filme2"
              src="img/conquistas/hackaschool.jpg"
              alt="Hackaschool"
            />
            <img className="medalha" src="img/medalhas/primeiro.png"></img>
            <h3>SemiFinal Hackaschool</h3>
            <p>Doidera</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Eventos;
