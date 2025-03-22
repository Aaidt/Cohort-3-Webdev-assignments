import { useState } from 'react'
import './index.css'
import { Sidebar } from "./components/Sidebar"
import { Card } from "./components/Card"

function App() {
  return (
  <div className="flex h-screen bg-black">
    <Sidebar />
    <Card />
  </div>
)}

export default App
