import React from 'react'

const PetForm = (props) => {

  return (
    <div>
      <label htmlFor="petsname">Name: </label>
      <input id="petsname" name="petsname" value={props.petsname} 
      onChange={props.handleChange} type="text" />
      <label htmlFor="breed">Breed: </label>
      <input id="breed" name="breed" value={props.breed} 
      onChange={props.handleChange} type="text" />
    </div>
  )
}

export default PetForm
