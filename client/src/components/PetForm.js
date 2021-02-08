import React, {useState, useEffect} from 'react'
import Button from '@material-ui/core/Button';
// import FileUpload from '@material-ui/core/FileUpload'
import FileUpload from './FileUpload'

const PetForm = (props) => {

  // const FileUpload = () => {
  //   const [file, setFile] = React.useState("");
    
  //   const handleUpload = (event) => {
  //     setFile(event.target.files[0]);
  //     // add code here to upload file to the server
  //   }
  //   return (
  //     <div id="upload-box">
  //       <input type="file" onChange={handleUpload} />
  //       <p>Filename: {file.name}</p>
  //       <p>File type: {file.type}</p>
  //       <p>File size: {file.size} bytes</p>
  //       {file && <ImageThumb image={file} />} 
  //     </div>
  //   )
  // }
  //   const ImageThumb = ({ image }) => {
  //     return <img src={URL.createObjectURL(image)} alt={image.name} />;
  //   };

  return (
    <div>
    <form encType="multipart/form-data" method="post" onSubmit={handleSubmit}>
      <label htmlFor="icon-button-file">
       <FileUpload />
      </label>

      <label htmlFor="name">Name: </label>
      <input id="name" name="name" value={props.name} 
      onChange={props.handleChange} type="text" />
      
      <label htmlFor="breed">Breed: </label>
      <input id="breed" name="breed" value={props.breed} 
      onChange={props.handleChange} type="text" />
      
      {/* <input accept="image/*" type="file" 
      onChange={props.handleChange('image')} s
      style={{display: 'none'}} 
      id="icon-button-file" */}
      {/* /> */}
      </form>
    </div>
  )
}

export default PetForm
