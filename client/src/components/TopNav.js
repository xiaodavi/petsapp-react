import React from 'react';
import { Link } from 'react-router-dom'
import {logout} from '../services/auth'

const TopNav = (props) => {
  console.log(props.user);
  const handleLogout = props => {
    
    logout().then(() => {
      props.setUser(null)
    })
  }

  return (
    <div>
     
        <Link to='/signup'>Signup</Link>
        <Link to="/login">Login</Link>
       
    </div>
  )
}

export default TopNav
