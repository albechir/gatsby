import React, {useState} from 'react'
import Layout from '../components/Layout'
import Button from 'antd/lib/button'
import 'antd/lib/button/style/css'
import {Link} from "gatsby"
import CKEditor from 'ckeditor4-react';
import styled, {ThemeProvider, createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
background-color: ${props => props.theme.mode === 'dark' ? '#18191a' : '#EEE'};
color: ${props => props.theme.mode === 'dark' ? '#18191a' : 'rgba(238,238,238,0.93)'};
}
`
const IndexPage = () => {

    const [theme, setTheme] = useState({mode: 'light'})

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle/>
                <Layout>
                    <div>
                        <div align="center">
                            <br/>

                            <Ptitle>Bechir fffDocS</Ptitle>

                            <h2>Click on Me to change the Theme =D</h2>
                            <Button style={{alignContent: "center"}}
                                    onClick={
                                        e => setTheme(
                                            theme.mode === 'light'
                                                ? { mode : 'dark'}
                                                : { mode : 'light'}
                                        )
                                    }
                            >
                                Toggle Theme
                            </Button>
                            <br/>
                            <br/>
                            <Link to="/contact">
                                <Button type="primary" size="large" icon="right-circle" style={{marginRight: 10}}>Join
                                    Bechir</Button>
                            </Link>
                            <Button type="primary" size="large" icon="github"
                                    href="https://github.com/albechir/gatsby">Github</Button>
                            <br/>
                            <br/>
                            <MyEditor>
                                <CKEditor
                                    data="<h1>Welecom to Bechir docs</h1>"
                                />
                            </MyEditor>
                        </div>
                    </div>
                </Layout>
            </>
        </ThemeProvider>
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
const Ptitle = styled.h1`
color: cornflowerblue;
font-family: cursive;
font-size: 70px;
    font-weight: bolder;`
export default IndexPage
