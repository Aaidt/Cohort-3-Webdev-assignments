import React, { useState, createContext, useContext } from 'react'
import "../App.css"
import AppBar from "./AppBar"
import Home from "./Home";


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
          padding: '1.5rem',
          backgroundColor: '#f0f0f0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <label style={{padding: 10}} htmlFor="use_context_api">
            Use Context API: {useContextApi ? "ON" : "OFF"}
          </label>
          <input
            id="use_context_api"
            type="checkbox"
            checked={useContextApi}
            onChange={(e) => setUseContextApi(e.target.checked)} />
          </div>
        </div>

        <main style={{ flex: 1, padding: '1rem' }}>
          {isLoggedIn ? (
            <Home />
          ) : (
            <Login onLogin={Login} />
          )}
        </main>
      </div>
    </AuthContext.Provider>
  )
}

export default AuthSystem