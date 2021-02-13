import React, {useState} from 'react'
import PetForm from '../components/PetForm'
import axios from 'axios'
import {Image} from 'cloudinary-react'
import BottomNav from '../components/BottomNav'

const RegisterPets = (props) => {
  const url = "https://api.cloudinary.com/v1_1/dynyu9aql/image/upload";
  const preset = "flmqoaes";

  const [imageSelected, setImageSelected] = useState("");
  const [petsname, setPetsname] = useState("");
  const [breed, setBreed] = useState("")
  
  const handleChange = event => {
    event.target.name === "petsname" ? setPetsname(event.target.value) 
    : setBreed(event.target.value)
  }

  const handleSubmit = () => {
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', preset);
    console.log(formData)
    axios.post(url, formData)
    .then((res) => {
      console.log(res);
      const imageUrl = res.data.secure_url;
      const publicId = res.data.public_id
      console.log(imageUrl)
      axios.post(`/api/pets/${props.user._id}/register-pets`, 
      {imageUrl:imageUrl, 
      publicId: publicId,
      petsname: petsname,
      breed: breed
    })
      .then(res => {
        console.log(res)
        props.history.push('/my-pets')
      }).catch(err => console.log("error while post imageUrl", err))
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <input type="file" 
      onChange={(event) => setImageSelected(event.target.files[0])}/>
      {imageSelected && <ImageThumb image={imageSelected} />} 
      <PetForm handleChange={handleChange}
      handleSubmit={handleSubmit} />
      <button onClick={handleSubmit}>Submit</button>
      <BottomNav />
    </div>
  )
}

const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};

export default RegisterPets
