import React from "react";
import "./App.css";
import PropertyList from "./components/PropertyList/PropertyList";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <PropertyList />
    </div>
  );
}

export default App;
