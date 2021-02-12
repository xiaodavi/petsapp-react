import React, {useState, useEffect} from 'react'
import PetForm from '../components/PetForm'
import Button from '@material-ui/core/Button';

import axios from 'axios'
import {Image} from 'cloudinary-react'


const RegisterPets = (props) => {
  const url = "https://api.cloudinary.com/v1_1/dynyu9aql/image/upload";
  const preset = "flmqoaes";

  const [imageSelected, setImageSelected] = useState("");
  const [loading, setLoading] = useState(false) 
  
  const uploadImage = () => {
    
    // console.log(files)
    // setImage(files[0])
    const formData = new FormData()
    formData.append('file', imageSelected)
    formData.append('upload_preset', preset)
    axios.post(url, formData)
    .then((res) => {
      console.log(res);
      const imageUrl = res.data.secure_url;
      console.log(imageUrl)
      axios.post(`/api/pets/${props.user._id}/register-pets`, {imageUrl:imageUrl})
      .then(res => {
        console.log(res)
      }).catch(err => console.log("error while post imageUrl", err))
    })
    .catch(err => console.log(err))
  }


  // useEffect(() => {
  //   async function fetchImage() {
  //     const image = await axios.get('/api/pets/getLatest');
  //     setImage(image.data);
  //   }
  //   fetchImage();
  //   // eslint-disable-next-line
  // }, []);

  return (
    <div>
    {/* <form> */}
      {/* <label htmlFor="petsimage">Upload an Image</label> */}
      <input type="file" 
      onChange={(event) => {
        setImageSelected(event.target.files[0])
      }} 
      />
      {/* <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
      {imageSelected && <ImageThumb image={imageSelected} />} 
     

      {/* <label htmlFor="petsname">Name: </label>
      <input id="petsname" name="petsname" value={props.petsname} 
      onChange={props.handleChange} type="text" />
      
      <label htmlFor="breed">Breed: </label>
      <input id="breed" name="breed" value={props.breed} 
      onChange={props.handleChange} type="text" /> */}
      
      <button onClick={uploadImage}>Submit</button>
      {/* </form> */}
      <Image cloudName="dynyu9aql" publicId="jzcscoaq92cwiqcfp2jy" />
    </div>
  )
}

const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};

export default RegisterPets
