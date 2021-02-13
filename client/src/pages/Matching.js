import React, {useState, useEffect} from 'react'
import PetCard from '../components/PetCard'
import axios from 'axios'
import styled from 'styled-components'
import BottomNav from '../components/BottomNav'

const Matching = () => {

  const [randomPet, setRandomPet] = useState("")

  useEffect(() => {
      axios.get(`/api/pets/random`)
      .then(res => {
      console.log(res.data)
      setRandomPet(res.data[0])
      });
  }, "")

  // const Wrapper = styled.div`
  //   display
  // `

  return (
    <div>
      <PetCard title={randomPet.petsname} image={randomPet.petsimage} desc={randomPet.breed}
        buttomName1="Like"
        buttomName2="Dislike"
      />
      <BottomNav />
    </div>
  )
}

export default Matching
