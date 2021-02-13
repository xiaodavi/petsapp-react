import React, {useState, useEffect} from 'react'
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
    display-direction: column;
    justify-content: center;
    align-items: center
  `

  return (
    <>
    <h1>My Profile</h1>
     {/* {pets.map(pet => <Wrapper>
     <PetCard title={pet.petsname} image={pet.petsimage} desc={pet.breed}/>
     </Wrapper> */}
     {/* )} */}
     <Avatar alt={user.username} src={user.avatar} className={classes.large} />
     {/* <img src={user.avatar} alt={user.username} /> */}
     <h3>{user.username}</h3>
     <p>{user.desc}</p>
     <BottomNav />
    </>
  )

}

export default Profile

