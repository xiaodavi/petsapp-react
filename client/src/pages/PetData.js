import React, {useState, useEffect} from 'react'
import axios from 'axios'
import PetCard from '../components/PetCard'
import styled from 'styled-components'

const PetData = (props) => {

  const [pets, setPets] = useState([])
  console.log(pets)

  useEffect(() => {
      axios.get(`/api/pets/${props.user._id}/mypets`)
      .then(res => {
      console.log(res.data)
      setPets(res.data)
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
    <h1>My Pets</h1>
     {pets.map(pet => <Wrapper>
     <PetCard title={pet.petsname} image={pet.petsimage} desc={pet.breed}/>
     </Wrapper>
     )}
    </>
  )

}

export default PetData
