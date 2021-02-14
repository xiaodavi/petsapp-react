import React from 'react'
import styled from 'styled-components'

const UserForm = (props) => {

  const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

  return (
    <Wrapper>
      <label htmlFor="username">Username: </label>
      <input id="username" name="username" value={props.username} 
      onChange={props.handleChange} type="text" />
      <label htmlFor="desc">About me: </label>
      <input id="desc" name="desc" value={props.desc} 
      onChange={props.handleChange} type="text" />
    </Wrapper>
  )
}

export default UserForm
