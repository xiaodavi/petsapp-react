import React, {useState, useEffect} from 'react'
import axios from 'axios'

const PetData = (props) => {

  const [pets, setPets] = useState([])
  console.log(pets)
  const getPets = () => {
    axios.get(`/api/pets/${props.user._id}/mypets`)
    .then(res => {
      console.log(res.data)
      setPets(res.data)
    })
  }



  // useEffect(() => {
  //   function getPets(status) {
  //     axios.get(`/api/pets/${props.user._id}/mypets`)
  //     .then(res => {
  //     console.log(res.data)
  //     setPets(res.data);
  //   })
  //   }
  
  //   // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
  //   // return () => {
  //   //   ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
  //   // };
  // }, [props.user._id]); // Only re-subscribe if props.friend.id changes

  return (
    <div>
        {pets.map(pet => {
        <>
        <img src={pet.petsimage} alt={pet.petsname} />
        <p>{pet.petsname}</p>
        <p>{pet.breed}</p>
        </> 
      })
    })
  </div>
 )
}

export default PetData
