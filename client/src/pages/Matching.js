import React, {useState, useEffect} from 'react'
import PetCard from '../components/PetCard'
import axios from 'axios'
import styled from 'styled-components'
import BottomNav from '../components/BottomNav'
import { SmileTwoTone, HeartTwoTone } from '@ant-design/icons';

const Matching = () => {

  const [pets, setPets] = useState([])
  const [loading, setLoading] = useState(true)
  
  const shuffle = arr => {
    for(let i = arr.length - 1; i >0; i--) {
      let j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }

  
  useEffect(() => {
    axios.get(`/api/pets/all`)
    .then(res => {
    console.log(res.data)
    setPets(res.data);
    setLoading(false)
    console.log(pets)
    shuffle(pets);
    });
}, [])

  
  const random = Math.floor(Math.random()*(pets.length-1-0+1) + 0)

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
    
      <PetCard title={pets[random].petsname} image={pets[random].petsimage} desc={pets[random].breed}
        buttomName1={<HeartTwoTone twoToneColor="#eb2f96" style={{ fontSize: '30px'}}/>}
        buttomName2={<SmileTwoTone twoToneColor="#52c41a" rotate={180} style={{ fontSize: '30px'}}/>}
      />
    }
    </Wrapper>
    <BottomNav />
    </>
  )
}

export default Matching
