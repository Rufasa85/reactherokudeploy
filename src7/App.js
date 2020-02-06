import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Navbar />
        <Navbar />
        <Navbar />
        <Jumbotron />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
