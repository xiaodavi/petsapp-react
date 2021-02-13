import React from 'react'
import styled from 'styled-components'
import { HomeTwoTone, HeartTwoTone, MessageTwoTone, ContactsTwoTone } from '@ant-design/icons';
import {Link} from 'react-router-dom'

const BottomNav = () => {

  const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80px;
    width: 100%;
    position: fixed;
    border: 1px solid pink;
  `
  return (
    <Wrapper>
    <Link to="/">
    <HomeTwoTone style={{ fontSize: '40px', margin: "10px"}} twoToneColor="#eb2f96"/>
    </Link>

    <Link to="/matching">
    <HeartTwoTone style={{ fontSize: '40px', margin: "10px" }} twoToneColor="#eb2f96"/>
    </Link>

    <Link to="/chat">
    <MessageTwoTone style={{ fontSize: '40px', margin: "10px"}} twoToneColor="#eb2f96"/>
    </Link>
    
    <Link to="/profile">
    <ContactsTwoTone style={{ fontSize: '40px', margin: "10px" }} twoToneColor="#eb2f96"/>
    </Link>
    </Wrapper>
  )
}

export default BottomNav
