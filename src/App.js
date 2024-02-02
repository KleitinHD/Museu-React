import "./App.css";

import Header from "./0Header";
import Banner from "./1Banner";
import Projetos from "./2Projetos";
import Eventos from "./Eventos";
import Equipe from "./Equipe";
import Footer from "./Footer";

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
