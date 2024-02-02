import "./App.css";

import Header from "./0Header";
import Banner from "./1Banner";
import Projetos from "./2Projetos";
import Eventos from "./3Eventos";
import Equipe from "./4Equipe";
import Footer from "./5Footer";

import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Projetos />
      <Eventos />
      <Equipe />
      <Footer />
    </div>
  );
}

export default App;
