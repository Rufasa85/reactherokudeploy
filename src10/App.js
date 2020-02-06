import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Joe from './components/Joe'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Joe/>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default App;
