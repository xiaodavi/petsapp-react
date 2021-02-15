import React from 'react'
import MainButton from '../components/MainButton'
import styled from 'styled-components'
import backgroundImg from '../images/Dating-IN-Your-50s.jpg'
// import LayoutStyle from '../components/LayoutStyle'
import TopNav from '../components/TopNav'
import BottomNav from '../components/BottomNav'
import { Link } from 'react-router-dom'
import Logo from '../images/undraw_Appreciation_re_p6rl.svg'
import Logo_2 from '../images/undraw_everyday_life_hjnw.svg'


const Home = (props) => {

  const Content = styled.div`
  ${'' /* background-image: url(${backgroundImg}); */}
  background-position: calc(100% - 0px) calc(100% - 0px);
  ${'' /* background-repeat: no-repeat; */}
  ${'' /* background-size: auto; */}
  width: 100%;
  height: 600px;
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

  const StyledImg = styled.img`
    height: 500px;
    width: 400px
  `
  return (
    <>
    <Content>
    </Content>
    {/* <LayoutStyle> */}

    {props.user ? (<>
    <TopNav user={props.user} setUser={props.setUser} {...props} />
      <Wrapper>
      <h1>Welcome, {props.user.username}</h1>
      <StyledImg src={Logo_2} alt="everyday-life" />
      </Wrapper>
      <BottomNav />
      </>)
    :
    (
      <> 
      <TopNav user={props.user} setUser={props.setUser} {...props}/>
      <Wrapper>
      <h1>Hi welcome to the petsapp, find your dogmate here</h1>
      <img src={Logo} alt="home-image" />
      <Link to="/signup"><MainButton title="GET STARTED"/></Link>
      {/* <Link to="/login"><MainButton title="LOGIN" /></Link> */}
      </Wrapper>
      </>) 
    }
    {/* </LayoutStyle> */}
    
    </>
  )
}

export default Home
