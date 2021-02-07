import React from 'react'

const AuthForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label id="email">Email: </label>
        <input name="email" value={props.value} type="email" onChange={props.handleChange}
        required />
        <label id="password">Password: </label>
        <input name="password" value={props.value} type="password" onChange={props.handleChange}
        required minLength="8" maxLength="20" />
        <button type="submit">{props.buttonName}</button>
      </form>
    </div>
  )
}

export default AuthForm
