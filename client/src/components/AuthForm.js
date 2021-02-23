import React from 'react'
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';

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

const AuthForm = (props) => {

  // const onFinish = (values) => {
  //   console.log('Success:', values);
  // };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      // onSubmit={props.handleSubmit}
      onFinish={props.handleSubmit}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
        name="email"
        onValuesChange={props.handleChange}
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
        {props.buttonName}
        </Button>
      </Form.Item>
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
