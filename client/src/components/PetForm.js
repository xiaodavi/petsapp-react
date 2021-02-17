import React from 'react'
import { Input } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { WomanOutlined } from '@ant-design/icons';

const PetForm = (props) => {

  return (
    <div>
      {/* <label htmlFor="petsname">Name: </label> */}
      <Input id="petsname" name="petsname" value={props.petsname} 
      onChange={props.handleChange} type="text" placeholder="name" prefix={<SmileOutlined />} />
      {/* <input id="petsname" name="petsname" value={props.petsname} 
      onChange={props.handleChange} type="text" /> */}
      {/* <label htmlFor="breed">Breed: </label> */}
      <Input id="breed" name="breed" value={props.breed} 
      onChange={props.handleChange} type="text" placeholder="breed" prefix={<WomanOutlined />} />
      {/* <input id="breed" name="breed" value={props.breed} 
      onChange={props.handleChange} type="text" /> */}
    </div>
  )
}

export default PetForm
