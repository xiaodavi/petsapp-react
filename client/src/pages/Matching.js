import React, {useState, useEffect} from 'react'
import PetCard from '../components/PetCard'
import axios from 'axios'
import styled from 'styled-components'
import BottomNav from '../components/BottomNav'
import { SmileTwoTone, HeartTwoTone } from '@ant-design/icons';

const Matching = (props) => {

  // const [pets, setPets] = useState([])
  
  const [randomPet, setRandomPet] = useState("")
  const [loading, setLoading] = useState(true)
  const [favoritedUser, setFavoritedUser] = useState("")
  const [match, setMatch] = useState(false)

  useEffect(async() => {
    const result = await axios.get(`/api/pets/random`)
    console.log(result.data)
    setRandomPet(result.data[0]);
    setLoading(false)
}, [])


  const handleLike = async (event) => {
    event?.preventDefault();
    const result = await axios.post(`/api/pets/${props.user._id}/like`, {"randomPet": randomPet})
    const currentUser = props.user;
    const favUser = result.data.favoritedUser
    if(favUser.favorites.includes(currentUser._id)){
      setFavoritedUser(favUser)
      setMatch(true)
      props.history.push("/chat")
    } else {
      console.log(result.data)
      setFavoritedUser(favUser)
      // setLoading(true)
      props.history.push('/matching')
    }
  }

  const handleDislike = (event) => {
    event.preventDefault()
  }


  // useEffect(()=> {
  //   handleLike();
  // }, );

  const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px
  `
  
  return (
    <>
    <Wrapper>
    {loading ? <> </> :
      <PetCard 
      title={randomPet.petsname} 
      image={randomPet.petsimage} 
      desc={randomPet.breed}
      handleLike={handleLike} handleDislike={handleDislike}
      buttomName1={<HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '30px'}} />}
      buttomName2={<SmileTwoTone twoToneColor="#52c41a" rotate={180} style={{ fontSize: '30px'}}/>}
      />
    }
    </Wrapper>
    <BottomNav />
    </>
  )
}

export default Matching
