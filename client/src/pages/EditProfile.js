import React, {useState} from 'react'
import UserForm from '../components/UserForm'
import axios from 'axios'
import {Image} from 'cloudinary-react'
import BottomNav from '../components/BottomNav'

const EditProfile = (props) => {
  const url = "https://api.cloudinary.com/v1_1/dynyu9aql/image/upload";
  const preset = "flmqoaes";

  const [imageSelected, setImageSelected] = useState("");
  const [username, setUsername] = useState("");
  const [desc, setDesc] = useState("")
  
  const handleChange = event => {
    event.target.name === "username" ? setUsername(event.target.value) 
    : setDesc(event.target.value)
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
      axios.post(`/api/user/${props.user._id}/edit`, 
      {imageUrl:imageUrl, 
      publicId: publicId,
      username: username,
      desc: desc
    })
      .then(res => {
        console.log(res)
        props.history.push('/profile')
      }).catch(err => console.log("error while post imageUrl", err))
    })
    .catch(err => console.log(err))
  }

  return (
    <div>
      <input type="file" 
      onChange={(event) => setImageSelected(event.target.files[0])}/>
      {imageSelected && <ImageThumb image={imageSelected} />} 
      <UserForm handleChange={handleChange}
      handleSubmit={handleSubmit} />
      <button onClick={handleSubmit}>Submit</button>
      <BottomNav />
    </div>
  )
}

const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};

export default EditProfile
