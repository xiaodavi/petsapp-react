import React from 'react'
import MainButton from '../components/MainButton'
import styled from 'styled-components'

const Home = () => {

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  return (
    <Wrapper>
      <MainButton title="SIGNUP" />
      <MainButton title="LOGIN" />
    </Wrapper>
  )
}

export default Home
