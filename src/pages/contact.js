import React, {useState} from "react"
// import Success from "./success"
import Layout from '../components/Layout'
import styled from "styled-components";
import 'antd/lib/button/style/css';
import Button from 'antd/lib/button'
import {ThemeProvider, createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
background-color: ${props => props.theme.mode === 'dark' ? '#18191a' : '#EEE'};
color: ${props => props.theme.mode === 'dark' ? '#18191a' : '#EEE'};
}
`
const Contact = () => {
    const [theme, setTheme] = useState({mode: 'light'})
    return (
        <ThemeProvider theme ={theme}>
            <>
                <GlobalStyle/>
            <Layout>

                <Title>
                    Contact form
                </Title>
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
                <form name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true" action="/success">
                    <FContact>
                        <legend> Contact form</legend>
                        <input type="hidden" name="form-name" value="contact"/>
                        <Label>
                            <label>Your Name : <input type="text" name="name"/></label>
                        </Label>
                        <Label>
                            <label>Your Email : <input type="email" name="email"/></label>
                        </Label>
                        <p style={{color : "blueviolet"}}>
                            <label>Message : <textarea name="message"></textarea></label>
                        </p>
                        <p>
                            <Button type="submit">Send</Button>
                        </p>
                    </FContact>
                </form>
            </Layout>
                </>
        </ThemeProvider>
    )
}

const FContact = styled.div`
margin: auto;
 align-items: flex-start;
width: 70%;
border: 3px solid cornflowerblue;
padding: 10px;
align: center; 
`

const Title = styled.p`
color: cornflowerblue;
font-family: cursive;
font-size: 70px;
text-align: center;
`
const Label = styled.p`
color: cornflowerblue;
font-family: cursive;
font-size: 10px;
`
export default Contact;
