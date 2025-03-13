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
      <div sytle={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
        <AppBar
          username={username}
          isLoggedIn={isLoggedIn}
          Logout={Logout}
        />
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '1rem',
          backgroundColor: '#f0f0f0'
        }}>
        <input
          id="use_context_api"
          type="checkbox"
          checked={useContextApi}
          onchange={(e) => setUseContextApi(e.target.checked)} />
        <label htmlFor="use_context_api">
          Use Context API: {useContextApi ? "ON" : "OFF"}
        </label>
        </div>
      </div>
    </AuthContext.Provider>
  )
}

export default AuthSystem