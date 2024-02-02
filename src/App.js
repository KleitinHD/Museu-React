import "./App.css";

import Header from "./Header";
import Banner from "./Banner";
import Projetos from "./Projetos";
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
