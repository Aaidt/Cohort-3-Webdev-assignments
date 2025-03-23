import { useState } from 'react'
import './index.css'
import { Sidebar } from "./components/Sidebar"
import { Card } from "./components/Card"
import { Filter } from "./components/Filter"
import { Problems } from "./components/Problems"

function App() {
  return (
  <div className="flex h-screen bg-black">
    <Sidebar />
    <Filter />
    <Card />
    <Problems />
  </div>
)}

export default App
