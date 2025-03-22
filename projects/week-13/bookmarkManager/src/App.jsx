import React from "react";
import "./index.css"
import { NavBar } from "./components/NavBar";
import { MainContent } from "./components/MainContent";
import { Features } from "./components/Features";


function App(){

  return (
    <div className="h-screen bg-white">
      <NavBar />
      <MainContent />
      <Features />
    </div>
  )
}

export default App; 