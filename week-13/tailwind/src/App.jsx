import { useState } from 'react'
import './App.css'
import { Button } from "./components/button"
import { Input } from "./components/input"
import { Otp } from "./components/Otp"
import { SideBar } from "./answers/1-basic-sidebar"

function App() {

  return (
    <div>
      {/* <br /><br /><br />
      <Otp number={10}/> */}
      <SideBar />

    </div>
  )
}

export default App
