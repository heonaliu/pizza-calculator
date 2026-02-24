import React from "react";
import { ResultsSection } from "./components/ResultsSection";
import { InputSection } from "./components/InputsSection";
function App() {
  return (
    <div className="app">
      <div>
        <h1 className="header">Party Pizza Calculator</h1>
      </div>
      <InputSection />
      <ResultsSection />
    </div>
  );
}

export default App;
