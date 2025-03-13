import React, { useState } from 'react'
import "../App.css"
import AppBar from "./AppBar"


const AuthSystem = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState("");
  const [useContextApi, setUseContextApi] = useState(false);

  return (
    <div>
      <AppBar />
    </div>
  )
}

export default AuthSystem