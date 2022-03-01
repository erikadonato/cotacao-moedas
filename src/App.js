import React from "react";
import './App.css'
import Header from "./components/header";
import Cotacao from "./pages/Cotacao";

function App() {
  return (
    <div className="App">
      <Header />
      <Cotacao />
    </div>
  );
}

export default App;
