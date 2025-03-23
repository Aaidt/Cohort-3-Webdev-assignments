import { useState } from 'react'
import './index.css'
import { Sidebar } from "./components/Sidebar"
import { Card } from "./components/Card"
import { Filter } from "./components/Filter"
import { Problems } from "./components/Problems"

function App() {
  const [filter, setFilter] = useState({
    easy: false,
    medium: false,
    hard: false
  })

  return (
  <div className="md:flex grid cols-12 h-screen bg-black">
    <Sidebar />
    <Filter filter={filter} setFilter={setFilter} />
    <Card />
    <Problems filter={filter} />
  </div>
)}

export default App
