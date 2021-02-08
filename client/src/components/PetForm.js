import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
// import FileUpload from '@material-ui/core/FileUpload'
// import FileUpload from './FileUpload'
import axios from 'axios'

const PetForm = (props) => {

  const [file, setFile] = useState(null);
  
  const fileSelectedHandler = (event) => {
    console.log(event.target.files[0])
    setFile(event.target.files[0]);
  }

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('petsimage', file, file.name);
    axios.post('/api/pets//register-pets', fd, {
      onUploadProgress: progressEvent => {
        console.log(progressEvent.loaded / progressEvent.total)
      }
    })
  }

  return (
    <div>
    <form encType="multipart/form-data" method="POST">
      <label htmlFor="petsimage">Upload an Image</label>
      <input type="file" onChange={fileSelectedHandler} name="petsimage" id="petsimage"/>
      {/* <p>Filename: {file.name}</p>
      <p>File type: {file.type}</p>
      <p>File size: {file.size} bytes</p> */}
      {file && <ImageThumb image={file} />} 
     

      <label htmlFor="petsname">Name: </label>
      <input id="petsname" name="petsname" value={props.petsname} 
      onChange={props.handleChange} type="text" />
      
      <label htmlFor="breed">Breed: </label>
      <input id="breed" name="breed" value={props.breed} 
      onChange={props.handleChange} type="text" />
      
      <button onClick={fileUploadHandler}>Submit</button>
      </form>
    </div>
  )
}

const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};

export default PetForm
