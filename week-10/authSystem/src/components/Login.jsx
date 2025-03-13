import React, { useState, useContext } from 'react'
import { AuthContext } from "./AuthSystem";

const Login = ({ onLogin: propOnLogin }) => {
  const [username, setUsername] = useState("");
  const contextValue = useContext(AuthContext);

  const handeLogin = () => {
    if(contextValue?.Login) {
      Login(username);
    }else if(propOnLogin){
      propOnLogin(username);
    }
    setUsername("");
  }


  return (
    <div>

    </div>
  )
}

export default Login