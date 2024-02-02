import React from "react";

import "./App.css";

function Header() {
  return (
    <header>
      <div class="container">
        <div id="logo" class="logo">
          <span>AQUÁRIO</span>
        </div>
        <nav>
          <a href="#projetos">Projetos</a>
          <a href="#eventos">Eventos</a>
          <a href="#equipe">Equipe</a>
          <a href="#galeria">Galeria</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
