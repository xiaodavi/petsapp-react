import React, {useState, useEffect} from 'react'
import PetForm from '../components/PetForm'
import Button from '@material-ui/core/Button';

import axios from 'axios'


const RegisterPets = (props) => {
  const url = process.env.BASE_URL;
  const preset = process.env.PRESET;

  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false) 
  
  const fileSelectedHandler = (event) => {
    console.log(event.target.files)
    setImage(event.target.files[0]);
  }

  const fileUploadHandler = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', preset)
    console.log(formData)
    try {
      // alert("hhh")
      setLoading(true);
      console.log(loading)
      const res = await axios.post(url, formData);
      console.log(res);
      const imageUrl = res.data.secure_url;
      console.log(imageUrl)
      const image = await axios.post(`/api/pets/${props.user._id}/register-pets`, 
      {
        imageUrl
      });
      setLoading(false);
      setImage(image.data);
      console.log(image.data)
    } catch (err) {
      console.error(err)
    }
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
      <label htmlFor="petsimage">Upload an Image</label>
      <input type="file" onChange={fileSelectedHandler} name="petsimage" id="petsimage"/>
      {/* <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
      {image && <ImageThumb image={image} />} 
     

      {/* <label htmlFor="petsname">Name: </label>
      <input id="petsname" name="petsname" value={props.petsname} 
      onChange={props.handleChange} type="text" />
      
      <label htmlFor="breed">Breed: </label>
      <input id="breed" name="breed" value={props.breed} 
      onChange={props.handleChange} type="text" /> */}
      
      <button onClick={fileUploadHandler}>Submit</button>
      {/* </form> */}
    </div>
  )
}

const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};

export default RegisterPets
