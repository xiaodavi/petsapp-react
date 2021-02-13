import React from 'react'

const UserForm = (props) => {

  return (
    <div>
      <label htmlFor="username">Username: </label>
      <input id="username" name="username" value={props.username} 
      onChange={props.handleChange} type="text" />
      <label htmlFor="desc">About me: </label>
      <input id="desc" name="desc" value={props.desc} 
      onChange={props.handleChange} type="text" />
    </div>
  )
}

export default UserForm
