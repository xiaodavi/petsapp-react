import React from 'react'

const AuthForm = () => {
  return (
    <div>
      <form>
        <label id="email">Email: </label>
        <input name="email" value="" type="email" required />
        <label id="password">Password: </label>
        <input name="password" value="" type="password" required />
      </form>
    </div>
  )
}

export default AuthForm
