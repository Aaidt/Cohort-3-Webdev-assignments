import React, { useState, createContext, useContext } from 'react'
import "../App.css"
import AppBar from "./AppBar"

export const AuthContext = createContext(undefined);

const AuthSystem = () => {

  const [useContextApi, setUseContextApi] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const Login = (newUsername) => {
    setUsername(newUsername);
    setIsLoggedIn(true);
  }

  const Logout = () => {
    setUsername("");
    setIsLoggedIn(false);
  }

  const contextValue = useContextApi ? { username, isLoggedIn, Login, Logout } : undefined;

  return (
    <AuthContext.Provider value={contextValue}>
      <div>
        <AppBar />
      </div>
    </AuthContext.Provider>
  )
}

export default AuthSystem