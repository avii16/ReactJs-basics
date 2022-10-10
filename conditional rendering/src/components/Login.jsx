import React from "react"
import Ip from "./Input"

function Login(){
  return (
    <form className="form">
    <Ip 
    type="text"
    placeholder="username"
    />
    <Ip 
    type="password"
    placeholder="password"
    />
    <button type="submit">Login</button>
  </form>
  )
}

export default Login;