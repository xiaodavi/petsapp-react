import React, {useState} from 'react';
import AuthForm from '../components/AuthForm'
import {signup} from '../services/auth';

const Signup = (props) => {
  // const [user, setUser] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("")
  
  const handleChange = e => {
    console.log(e.target.name, e.target.value)
    e.target.name === "email" ? setEmail(e.target.value) : setPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password)
    signup(email, password).then(data => {
      if(data.message) {
        setMessage(data.message);
        setEmail("");
        setPassword("")
      } else {
        props.setUser(data);
        console.log(data)
        props.history.push('/')
      }
    })
  }

  return (
    <div>
      <AuthForm handleChange={handleChange} handleSubmit={handleSubmit} buttonName="Signup"/>
    </div>
  )
}

export default Signup
