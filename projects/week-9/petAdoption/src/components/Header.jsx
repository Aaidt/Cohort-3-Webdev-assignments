import React from 'react'

const Header = ({ message }) => {
  return (
    <div style={{backgroundColor: "rgba(207, 142, 44, 0.5)", padding: 20}}>
      <b>{ message }  </b>  
    </div>
  )
}

export default Header