import React from 'react'

const AppBar = () => {

  const person = "Raman"

  const Login = () => {

  }
  
  return (
    <div>
      <div className="app-bar">
        <h2 style={{padding: 15}}><b>AuthSystem Demo</b></h2>
        <h3>Welcome, {person}!</h3>
        <button style={{padding: 10, borderRadius: 10}} onClick={Login}>LOGIN</button>
      </div>
    </div>
  )
}

export default AppBar