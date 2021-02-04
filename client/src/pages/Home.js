import React from 'react'
import MainButton from '../components/MainButton'
import styled from 'styled-components'
import backgroundImg from '../images/Dating-IN-Your-50s.jpg'

const Home = () => {

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative
  `

  const Content = styled.div`
    background-image: url(${backgroundImg});
    background-position: calc(100% - 0px) calc(100% - 0px);
    width: 90%;
    height: 2000px;
    opacity: 0.5;
    position: absolute;
    z-index: -1
  `
  return (
    <>
    <Content>
    </Content>
    <Wrapper>
      <MainButton title="SIGNUP" />
      <MainButton title="LOGIN" />
    </Wrapper>
    </>
  )
}

export default Home
