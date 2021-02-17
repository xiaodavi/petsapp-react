import React, {useState} from 'react'
import PetForm from '../components/PetForm'
import axios from 'axios'
import {Image} from 'cloudinary-react'
import BottomNav from '../components/BottomNav'
import {Button} from 'antd';
import styled from 'styled-components'
import 'antd/dist/antd.css';
// import './index.css';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';

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

  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };


  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 600px
    `
  return (
    <>
    <Wrapper>
      <input type="file" 
      onChange={(event) => setImageSelected(event.target.files[0])}/>
    
      <ImgCrop rotate>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={imageSelected}
        onChange={(event) => setImageSelected(event.target.files[0])}
        onPreview={onPreview}
      >
        {/* {fileList.length < 5 && '+ Upload'} */}
      </Upload>
    </ImgCrop>

      {/* // <ImageThumb image={imageSelected} style={{"height": "300px", "width": "300px" }} /> */}
      
      <PetForm handleChange={handleChange}
      handleSubmit={handleSubmit} />
      <Button onClick={handleSubmit} type="primary" > Submit </Button>
    </Wrapper>
    <BottomNav />
    </>
  )
}

const ImageThumb = ({ image }) => {
  return <img src={URL.createObjectURL(image)} alt={image.name} />;
};

export default RegisterPets
