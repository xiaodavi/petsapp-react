import React from 'react'

const AuthForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input id="email" name="email" value={props.email} type="email" onChange={props.handleChange}
        required />
        
        <label htmlFor="password">Password: </label>
        <input id="password" name="password" value={props.password} type="password" onChange={props.handleChange}
        required minLength="8" maxLength="20" />
        <button type="submit">{props.buttonName}</button>
      </form>
    </div>
  )
}

export default AuthForm
