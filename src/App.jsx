import React from "react";
import icon from "./assets/images/iconLogo.png";
import { PartyCalculator } from "./components/PartyCalculator";
function App() {
  return (
    <div className="app">
      <div>
        <img className="pizza-header" src={icon} alt="pizza" />
        <h1 className="header">Party Pizza Calculator</h1>
      </div>
      <PartyCalculator />
    </div>
  );
}

export default App;
