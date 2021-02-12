import React, {useState} from 'react'
import AuthForm from '../components/AuthForm'
import {login} from '../services/auth'

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  
  const handleChange = e => {
    e.target.name === "email" ? setEmail(e.target.value) : setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    login(email, password).then(data => {
      console.log(data)
      if(data.message) {
        setMessage(data.message);
        setEmail("");
        setPassword("")
      } else {
        props.setUser(data);
        props.history.push('/')
      }
    })
  }
  return (
    <div>
      <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} buttonName="Login"/>
    </div>
  )
}

export default Login
