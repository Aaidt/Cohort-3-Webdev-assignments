import React, { useContext } from 'react'
import { AuthContext } from "./AuthSystem";

const AppBar = ({ username: propUsername, isLoggedIn: propIsLoggedIn, Logout: propLogout}) => {
  const contextValue = useContext(AuthContext);

  const displayUsername = contextValue?.username ?? propUsername;
  const displayIsLoggedIn = contextValue?.isLoggedIn ?? propIsLoggedIn;
  const handleLogout = contextValue?.Logout ?? propLogout;


  return (
    <div style={{
      backgroundColor: '#3f98b5',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
    <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Auth System Demo</h1>
    </div>
  )
}

export default AppBar