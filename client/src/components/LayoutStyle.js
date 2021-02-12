import React from 'react'
import { Layout } from 'antd';

const { Header , Footer, Content } = Layout

const LayoutStyle = ({children}) => {
  return (
    <Layout>
      <Header>{children}</Header>
      <Content>{children}</Content>
      <Footer>{children}</Footer>
    </Layout>
  )
}

export default LayoutStyle
