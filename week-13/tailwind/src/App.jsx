import { useState } from 'react'
import './App.css'
import { Button } from "./components/button"
import { Input } from "./components/input"

function App() {

  return (
    <div className="h-screen bg-blue-900 ">
    <br /><br /><br />
    <Input type={"text"} placeholder={"Enter username:"}></Input>
    <Button disabled={false}>Sign-up</Button>

    </div>
  )
}

export default App
