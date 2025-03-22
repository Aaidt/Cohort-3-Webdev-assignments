import React from "react";
import "./index.css"
import { NavBar } from "./components/NavBar";
import { MainContent } from "./components/MainContent";


function App(){

  return (
    <div className="h-screen bg-white">
      <NavBar />
      <MainContent />
    </div>
  )
}

export default App; 