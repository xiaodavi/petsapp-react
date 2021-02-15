import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import PetCard from '../components/PetCard'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import BottomNav from '../components/BottomNav';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Profile = (props) => {

  const classes = useStyles();

  const [user, setUser] = useState([props.user])
  console.log(user)

  useEffect(() => {
      axios.get(`/api/user/${props.user._id}/profile`)
      .then(res => {
      console.log(res.data)
      setUser(res.data)
      });
  }, [])

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px
  `
  const Headline = styled.h1`
    text-align: center
  `

  return (
    <>
      <Headline>My Profile</Headline>
      <Wrapper>
        
        {/* {pets.map(pet => <Wrapper>
        <PetCard title={pet.petsname} image={pet.petsimage} desc={pet.breed}/>
        </Wrapper> */}
        {/* )} */}
        <Link to="/edit-profile">
        <Avatar alt={user.username} src={user.avatar} className={classes.large} />
        </Link>
        {/* <img src={user.avatar} alt={user.username} /> */}
        <h3>{user.username}</h3>
        <p>{user.desc}</p>
      </Wrapper>
      <BottomNav />
    </>
  )

}

export default Profile

