import React from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, Select } from 'antd';
const {option} = Select;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const AuthForm = () => {
  const [form] = Form.useForm()
  
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      form={form}
      {...layout}
      name="register"
      // initialValues={{
      //   remember: true,
      // }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        style={{width: "400px"}}
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        style={{width: "400px"}}
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      {/* <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  );
  // return (


  //   <div>
  //     <form onSubmit={props.handleSubmit}>
  //       <label htmlFor="email">Email: </label>
  //       <input id="email" name="email" value={props.email} type="email" onChange={props.handleChange}
  //       required />
        
  //       <label htmlFor="password">Password: </label>
  //       <input id="password" name="password" value={props.password} type="password" onChange={props.handleChange}
  //       required minLength="8" maxLength="20" />
  //       <button type="submit">{props.buttonName}</button>
  //     </form>
  //   </div>
  // )
}

export default AuthForm
