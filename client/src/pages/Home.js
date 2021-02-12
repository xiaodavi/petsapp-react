import React from 'react'
import MainButton from '../components/MainButton'
import styled from 'styled-components'
import backgroundImg from '../images/Dating-IN-Your-50s.jpg'
// import LayoutStyle from '../components/LayoutStyle'
import TopNav from '../components/TopNav'
import { Link } from 'react-router-dom'


const Home = (props) => {

  const Content = styled.div`
  background-image: url(${backgroundImg});
  background-position: calc(100% - 0px) calc(100% - 0px);
  width: 90%;
  height: 2000px;
  opacity: 0.5;
  position: absolute;
  z-index: -1
`

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 600px;
  `
  return (
    <>
    <Content>
    </Content>
    {/* <LayoutStyle> */}
    <TopNav {...props} />
      <Wrapper>
      <h1>Hi welcome to the petsapp, find your dogmate here</h1>
      <Link to="/signup"><MainButton title="GET STARTED"/></Link>
      <Link to="/login"><MainButton title="LOGIN" /></Link>
      </Wrapper>
     
    {/* </LayoutStyle> */}
    
    </>
  )
}

export default Home
