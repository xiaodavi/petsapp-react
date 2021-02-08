import React, {useState, useEffect} from 'react'
import PetForm from '../components/PetForm'

const RegisterPets = () => {
  const [petData, setPetData] = useState("")
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")

  useEffect(() => {
    const petData = new FormData()
  })

  const handleChange = e => {
    e.target.name === "name" ? 
    setName(e.target.value) : 
    setBreed(e.target.value)
  }

  return (
    <div>
      <PetForm handleChange={handleChange}/>
    </div>
  )
}

export default RegisterPets
