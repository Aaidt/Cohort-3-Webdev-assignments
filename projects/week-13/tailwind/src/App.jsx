import { useState } from 'react'
import './App.css'
import { Otp } from "./components/Otp"
import { SideBar } from "./answers/1-basic-sidebar"

function App() {

  return (
    <div className="h-screen bg-white dark:bg-blue-900 text-black dark:text-white">

      <button onClick={() => {
        document.querySelector("html").classList.toggle("dark");
      } 

      }>Toggle themes</button>

    </div>
  )
}

export default App
