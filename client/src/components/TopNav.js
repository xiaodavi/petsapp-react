import React from 'react';
import { Link } from 'react-router-dom'
import {logout} from '../services/auth'

const TopNav = (props) => {
  
  console.log(props.user);
  const handleLogout = () => {
    logout().then(() => {
      props.setUser(null)
    })
  }

  return (
    <div>
    {
      props.user ? (<Link to="/" onClick={() => handleLogout(props.user)}>Logout</Link>) :
      ( <>
        <Link to='/signup'>Signup</Link>
        <Link to="/login">Login</Link>
        </>
      )
    }
        
        
       
    </div>
  )
}

export default TopNav
