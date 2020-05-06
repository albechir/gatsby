import React from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import { Link } from "gatsby"
import CKEditor from 'ckeditor4-react';
import styled from 'styled-components'


const IndexPage = () => {
  return (
    <Layout>
      <div>
        <div align="center">
        <br/>

          <Ptitle>Bechir DocS</Ptitle>

          <h2>Boilerplate for markdown-based website</h2>
          <br/>
          <Link to="/contact">
            <Button type="primary" size="large" icon="right-circle" style={{marginRight: 10}}>Join Bechir</Button>
          </Link>
          <Button type="primary" size="large" icon="github" href="https://github.com/albechir/gatsby">Github</Button>
          <h2>Using React</h2>
          <MyEditor>
          <CKEditor
              data="<h1>Welecom to Bechir docs</h1>"
          />
          </MyEditor>
        </div>
      </div>
    </Layout>
  )
}

const MyEditor = styled.div`
margin: auto;
 align-items: flex-start;
width: 70%;
border: 3px solid cornflowerblue;
padding: 10px;
align: center; 
`
const  Ptitle = styled.h1`
color: cornflowerblue;
font-family: cursive;
font-size: 70px;
    font-weight: bolder;`
export default IndexPage
