import { useState } from 'react'
import './App.css'
import { Button } from "./components/button"
import { Input } from "./components/input"
import { Otp } from "./components/Otp"

function App() {

  return (
    <div className="h-screen bg-blue-900 ">
      <br /><br /><br />
      <Otp number={10}/>

    </div>
  )
}

export default App
