import React from 'react'
import "../App.css"
const AuthSystem = () => {
  const person = "Raman"

  const Login = () => {

  }

  return (
    <div className="app-bar">
      <h2 style={{padding: 15}}><b>AuthSystem Demo</b></h2>
      <h3>Welcome, {person}!</h3>
      <button style={{padding: 10, borderRadius: 10}} onClick={Login}>LOGIN</button>
    </div>
  )
}

export default AuthSystem