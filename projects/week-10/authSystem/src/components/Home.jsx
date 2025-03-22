import React from 'react'

const Home = () => {
  return (
    <div style={{padding: "1rem"}}>
      <h2 style={{fontWeight: "bold", fontSize: "1.5rem", marginBottom: "1rem"}}></h2>
      <p>This demo showcases two different approaches to handling authentication state in react: </p>
      <ul>
        <li>State lifting</li>
        <li>Context API</li>
      </ul>
    </div>
  )
}

export default Home